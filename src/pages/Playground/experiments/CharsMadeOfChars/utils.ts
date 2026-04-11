export const particles = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
].sort(() => 0.5 - Math.random());

export function getRandomCirclePosition(
  index: number,
  radius: number,
  itemsCount: number,
  increment: number,
): [number, number, number] {
  const angle = (index / itemsCount) * Math.PI * 2 + increment;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return [x + 5, y + 5, 0];
}

export const getRandomForm = () => {
  const circlePosMover = (Math.floor(Math.random() * 10) / particles.length) * Math.PI * 2;
  return new Map<string, [number, number, number]>(
    particles.map((letter, index) => {
      return [letter, getRandomCirclePosition(index, 8, particles.length, circlePosMover)];
    }),
  );
};

export const FORM_TYPES = { RANDOM: "random", A: "a", B: "b" } as const;
export type FormType = (typeof FORM_TYPES)[keyof typeof FORM_TYPES];
