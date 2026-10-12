// Elasticity mind map spec. Coordinates are world units; h is auto for boxes.
export default {
  title: "Elasticity Mind Map",
  subtitle: "Microeconomics · Ch. 3–4 · Karlan & Morduch",
  world: { w: 2620, h: 1760 },
  legend: [
    ["red", "The math"],
    ["purple", "Buyers · demand"],
    ["blue", "Sellers · supply"],
    ["orange", "Other goods & income"],
    ["green", "Revenue"],
  ],
  nodes: [
    { id: "traps", x: 60, y: 60, w: 400, shape: "dashed", color: "alert",
      title: "Exam Traps",
      rows: [
        "**Quick Play**: **Q**uantity over **P**rice",
        "Size first, then the sign from the law of demand",
        "Slope is not the same as elasticity",
        "Say “demand is elastic,” not “the price”",
        "Both curves shift → one of P or Q is “?”",
      ] },

    { id: "law", x: 560, y: 60, w: 310, color: "purple",
      above: "From Ch. 3",
      title: "Law of Demand",
      math: "P\\uparrow \\;\\Rightarrow\\; Q_D\\downarrow",
      rows: ["Price and quantity demanded move opposite ways"] },

    { id: "mid", x: 1010, y: 330, w: 390, color: "red",
      above: "Change ÷ average",
      title: "Mid-Point % Change",
      math: "\\%\\Delta X=\\dfrac{X_2-X_1}{(X_1+X_2)/2}",
      rows: ["Using the average gives the same answer in both directions"] },

    { id: "solve", x: 1560, y: 50, w: 340, color: "red",
      title: "Solve for %ΔQ",
      math: "\\%\\Delta Q_D = E_D \\times \\%\\Delta P",
      rows: ["$E=-2$, price $+5\\%$ → quantity $-10\\%$"] },

    { id: "ped", x: 1560, y: 340, w: 340, color: "purple",
      title: "Price Elasticity of Demand",
      math: "E_D=\\dfrac{\\%\\Delta Q_D}{\\%\\Delta P}",
      rows: ["Always negative → drop the sign, compare to 1"] },

    { id: "cats", x: 2070, y: 300, w: 470, color: "purple",
      title: "Elastic or Inelastic?",
      rows: [
        "Perfectly elastic · $|E|=\\infty$ · horizontal",
        "Elastic · $|E|>1$ · Q moves more than P",
        "Unit elastic · $|E|=1$ · same %",
        "Inelastic · $|E|<1$ · Q moves less than P",
        "Perfectly inelastic · $|E|=0$ · vertical",
      ] },

    { id: "slope", x: 2150, y: 40, w: 300, h: 150, shape: "ellipse",
      text: "Straight demand curve: the top is elastic, the bottom is inelastic" },

    { id: "tr", x: 2090, y: 760, w: 420, color: "green",
      title: "Total Revenue",
      math: "TR = P \\times Q",
      rows: [
        "Elastic: $P\\uparrow \\Rightarrow TR\\downarrow$ · quantity effect wins",
        "Inelastic: $P\\uparrow \\Rightarrow TR\\uparrow$ · price effect wins",
        "Unit elastic: TR is at its maximum",
      ],
      below: "Elastic demand: price and revenue move opposite ways" },

    { id: "dped", x: 1560, y: 740, w: 360, color: "purple",
      below: "How easy is it to walk away?",
      title: "Determinants of PED",
      rows: [
        "More substitutes → more elastic",
        "A want, not a need → more elastic",
        "Big share of income → more elastic",
        "More time to adjust → more elastic",
        "Narrow market → more elastic",
      ] },

    { id: "hub", x: 1020, y: 740, w: 360, h: 250, shape: "diamond",
      title: "A Price Change",
      text: "two points on a curve<br>$(P_1,Q_1)\\to(P_2,Q_2)$" },

    { id: "pes", x: 430, y: 340, w: 340, color: "blue",
      title: "Price Elasticity of Supply",
      math: "E_S=\\dfrac{\\%\\Delta Q_S}{\\%\\Delta P}",
      rows: ["Always positive: price and quantity supplied move together"] },

    { id: "dpes", x: 400, y: 720, w: 400, color: "blue",
      below: "How easy is it to make more?",
      title: "Determinants of PES",
      rows: [
        "Inputs easy to get → more elastic",
        "Flexible production → more elastic",
        "More time to adjust → more elastic",
      ] },

    { id: "farm", x: 80, y: 1000, w: 270, h: 150, shape: "ellipse",
      text: "A farmer this month can’t grow more: perfectly inelastic" },

    { id: "cross", x: 560, y: 1150, w: 390, color: "orange",
      title: "Cross-Price Elasticity",
      math: "E_{AB}=\\dfrac{\\%\\Delta Q_A}{\\%\\Delta P_B}",
      rows: ["**+** substitutes", "**−** complements", "**0** unrelated goods"] },

    { id: "inc", x: 1450, y: 1150, w: 390, color: "orange",
      title: "Income Elasticity",
      math: "E_I=\\dfrac{\\%\\Delta Q_D}{\\%\\Delta\\,\\text{Income}}",
      rows: ["**+** normal good · above 1 is a luxury", "**−** inferior good"] },

    { id: "ch3", x: 980, y: 1470, w: 420, color: "none",
      title: "Ch. 3 · Determinants of Demand",
      rows: ["Preferences", "Prices of related goods", "Income", "Expectations", "Number of buyers"],
      below: "Ch. 3 says which way the curve shifts. Ch. 4 measures how much." },
  ],
  edges: [
    { from: "hub", to: "mid", label: "Turn both changes into %" },
    { from: "mid", to: "ped", label: "Quick Play: %ΔQ over %ΔP" },
    { from: "mid", to: "pes", label: "Same formula, quantity supplied" },
    { from: "law", to: "ped", label: "Why PED is negative", bend: -150 },
    { from: "ped", to: "solve", label: "Multiply both sides by %ΔP" },
    { from: "ped", to: "cats", label: "Compare |E| to 1" },
    { from: "cats", to: "tr", label: "Which effect wins?" },
    { from: "dped", to: "ped", label: "Sets how big |E| is" },
    { from: "dpes", to: "pes", label: "Sets how big E is" },
    { from: "hub", to: "cross", label: "Price of another good", bend: -40 },
    { from: "hub", to: "inc", label: "Income changes instead", bend: 40 },
    { from: "cross", to: "ch3", label: "Measures “related goods”", dashed: true, bend: -30 },
    { from: "inc", to: "ch3", label: "Measures “income”", dashed: true, bend: 30 },
  ],
};
