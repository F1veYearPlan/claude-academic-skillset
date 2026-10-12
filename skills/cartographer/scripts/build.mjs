// Build a hand-drawn mind map page from a spec.
// Usage: node build.mjs <spec.mjs> <out.html> [vendorDir]
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const SKILL = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const VENDOR = process.argv[4] || "/tmp/cartographer-vendor";
const katex = require(path.join(VENDOR, "katex/dist/katex.js"));
const [specPath, outPath] = process.argv.slice(2);
const spec = (await import(pathToFileURL(path.resolve(specPath)).href)).default;

// ---------- text -> html (bold + inline/display math) ----------
function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function tex(t, display) {
  return katex.renderToString(t, { displayMode: display, throwOnError: true, output: "html" });
}
function rich(s) {
  if (!s) return "";
  const parts = s.split(/(\$[^$]+\$)/g);
  return parts.map(p => {
    if (p.startsWith("$") && p.endsWith("$") && p.length > 1) return tex(p.slice(1, -1), false);
    // allow <br> passthrough, escape the rest, then bold
    return p.split("<br>").map(x => esc(x).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")).join("<br>");
  }).join("");
}

const nodes = spec.nodes.map(n => {
  let html = "";
  if (n.title) html += `<div class="t">${rich(n.title)}</div>`;
  if (n.math) html += `<div class="f">${tex(n.math, true)}</div>`;
  if (n.text) html += `<div class="x">${rich(n.text)}</div>`;
  if (n.rows) html += `<ul class="r">${n.rows.map(r => `<li>${rich(r)}</li>`).join("")}</ul>`;
  return { id: n.id, x: n.x, y: n.y, w: n.w, h: n.h || null, shape: n.shape || "box",
           color: n.color || "none", html,
           above: n.above ? rich(n.above) : "", below: n.below ? rich(n.below) : "" };
});
const edges = spec.edges.map(e => ({ ...e, label: e.label ? rich(e.label) : "" }));

// ---------- fonts ----------
const b64 = f => fs.readFileSync(f).toString("base64");
const FD = path.join(VENDOR, "excalidraw/dist/prod/fonts");
function faces(family, dir) {
  // one @font-face per subset file; the browser picks by glyph coverage via unicode-range
  const { execSync } = require("node:child_process");
  const out = [];
  for (const f of fs.readdirSync(path.join(FD, dir))) {
    const full = path.join(FD, dir, f);
    const range = execSync(`python3 -c "
from fontTools.ttLib import TTFont
cps=sorted(TTFont('${full}').getBestCmap().keys());o=[];s=p=cps[0]
for c in cps[1:]:
    if c==p+1: p=c; continue
    o.append((s,p)); s=p=c
o.append((s,p));print(','.join(('U+%X'%a) if a==b else ('U+%X-%X'%(a,b)) for a,b in o))"`).toString().trim();
    out.push(`@font-face{font-family:"${family}";src:url(data:font/woff2;base64,${b64(full)}) format("woff2");unicode-range:${range};font-display:block}`);
  }
  return out.join("\n");
}
const fontCSS = faces("Excalifont", "Excalifont") + "\n" + faces("Comic Shanns", "ComicShanns");

let katexCSS = fs.readFileSync(path.join(VENDOR, "katex/dist/katex.min.css"), "utf8");
const KF = path.join(VENDOR, "katex/dist/fonts");
katexCSS = katexCSS.replace(/src:url\(fonts\/([^)]+?\.woff2)\) format\("woff2"\)(,url\([^)]+\) format\("[^"]+"\))*/g,
  (_, f) => `src:url(data:font/woff2;base64,${b64(path.join(KF, f))}) format("woff2")`);

const data = JSON.stringify({ title: spec.title, subtitle: spec.subtitle, world: spec.world,
  legend: spec.legend, nodes, edges }).replace(/</g, "\\u003c");

const page = fs.readFileSync(path.join(SKILL, "assets/template.html"), "utf8")
  .replace("/*FONTS*/", () => fontCSS)
  .replace("/*KATEX*/", () => katexCSS)
  .replace("__TITLE__", () => spec.title)
  .replace("/*DATA*/", () => data);
fs.writeFileSync(outPath, page);
console.log("wrote", outPath, (page.length / 1024).toFixed(0) + " KB");
