#!/usr/bin/env bash
# Downloads the fonts and KaTeX the build needs into a vendor folder (default /tmp/cartographer-vendor).
set -e
V="${1:-/tmp/cartographer-vendor}"
if [ -f "$V/.ready" ]; then echo "vendor ready: $V"; exit 0; fi
mkdir -p "$V" && cd "$V"
npm pack katex@0.18.9 @excalidraw/excalidraw@0.18.1 --silent >/dev/null
mkdir -p katex excalidraw
tar -xzf katex-0.18.9.tgz -C katex --strip-components=1
tar -xzf excalidraw-excalidraw-0.18.1.tgz -C excalidraw --strip-components=1
rm -f *.tgz
python3 -c "import fontTools, brotli" 2>/dev/null || pip install fonttools brotli --break-system-packages -q
touch .ready && echo "vendor ready: $V"
