export const CUBE_SIZE = 100;
export const EXPAND_AMOUNT_DEFAULT = 30;
export const EXPAND_AMOUNT_HOVERED = 70;

export const SIDE_COLORS = [
  "rgba(25, 118, 210, 0.4)", // front - blue
  "rgba(211, 47, 47, 0.4)", // back - red
  "rgba(56, 142, 60, 0.4)", // right - green
  "rgba(245, 124, 0, 0.4)", // left - orange
  "rgba(123, 31, 162, 0.4)", // top - purple
  "rgba(251, 192, 45, 0.4)", // bottom - yellow
];

export const SIDE_CONTENTS = ["⊂(◉‿◉)つ", "(ㆆ _ ㆆ)", "(✿◠‿◠)", "(⌐■_■)", "(｡◕‿‿◕｡)", "(͡ ° ͜ʖ ͡ °)"];

export const getSideTransforms = (size: number, expandAmount: number) => [
  `translateZ(${size / 2 + expandAmount}px)`,
  `rotateY(180deg) translateZ(${size / 2 + expandAmount}px)`,
  `rotateY(90deg) translateZ(${size / 2 + expandAmount}px)`,
  `rotateY(-90deg) translateZ(${size / 2 + expandAmount}px)`,
  `rotateX(90deg) translateZ(${size / 2 + expandAmount}px)`,
  `rotateX(-90deg) translateZ(${size / 2 + expandAmount}px)`,
];

export const SIDE_COMMON_STYLES = {
  position: "absolute" as const,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold",
  borderRadius: "12px",
  backdropFilter: "blur(18px)",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  transition: "all 0.3s ease",
  overflow: "hidden",
};
