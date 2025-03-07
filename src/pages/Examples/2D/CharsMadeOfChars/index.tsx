import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSpring, animated, easings } from "@react-spring/three";
import { Stack, Button, useTheme } from "@mui/material";

const AnimatedText = animated(Text);

const particles = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
].sort(() => 0.5 - Math.random());

function getRandomCirclePosition(
  index: number,
  radius: number,
  itemsCount: number,
  increment: number,
): [number, number, number] {
  // Calculate angle based on item index
  const angle = (index / itemsCount) * Math.PI * 2 + increment; //adding increment to simulate randomness of circle
  const x = Math.cos(angle) * radius; // Calculate x-coordinate
  const y = Math.sin(angle) * radius; // Calculate y-coordinate

  return [x + 5, y + 5, 0]; //adding constants to move center of circle to center of canvas
}

const getRandomForm = () => {
  const circlePosMover = (Math.floor(Math.random() * 10) / particles.length) * Math.PI * 2;
  return new Map<string, [number, number, number]>(
    particles.map((letter, index) => {
      return [letter, getRandomCirclePosition(index, 8, particles.length, circlePosMover)];
    }),
  );
};
const getALetterForm = () =>
  new Map<string, [number, number, number]>([
    [particles[0], [2 + 0.6, 0.6, 0]],
    [particles[1], [2 + 0.8, 1.6, 0]],
    [particles[2], [2 + 1, 2.6, 0]],
    [particles[3], [2 + 1.2, 3.6, 0]],
    [particles[4], [2 + 1.4, 4.6, 0]],
    [particles[5], [2 + 1.6, 5.6, 0]],
    [particles[6], [2 + 1.8, 6.6, 0]],
    [particles[7], [2 + 2, 7.6, 0]],
    [particles[8], [2 + 2.2, 8.6, 0]],
    [particles[9], [2 + 2.5, 9.6, 0]],

    [particles[10], [2 + 0.3 + 3, 10.6, 0]],

    [particles[11], [2 + 4.2, 9.6, 0]],
    [particles[12], [2 + 4.5, 8.6, 0]],
    [particles[13], [2 + 4.7, 7.6, 0]],
    [particles[14], [2 + 5, 6.6, 0]],
    [particles[15], [2 + 5.2, 5.6, 0]],
    [particles[16], [2 + 5.4, 4.6, 0]],
    [particles[17], [2 + 5.6, 3.6, 0]],
    [particles[18], [2 + 5.8, 2.6, 0]],
    [particles[19], [2 + 6, 1.6, 0]],
    [particles[20], [2 + 6.2, 0.6, 0]],

    [particles[21], [2 + 2, 4.6, 0]],
    [particles[22], [2 + 2.8, 4.6, 0]],
    [particles[23], [2 + 3.55, 4.6, 0]],
    [particles[24], [2 + 4.2, 4.6, 0]],
    [particles[25], [2 + 4.8, 4.6, 0]],
  ]);
const getBLetterForm = () =>
  new Map<string, [number, number, number]>([
    [particles[0], [3 + 0.6, 0.6, 0]],
    [particles[1], [3 + 0.6, 1.6, 0]],
    [particles[2], [3 + 0.6, 2.6, 0]],
    [particles[3], [3 + 0.6, 3.6, 0]],
    [particles[4], [3 + 0.6, 4.6, 0]],
    [particles[5], [3 + 0.6, 5.6, 0]],
    [particles[6], [3 + 0.6, 6.6, 0]],
    [particles[7], [3 + 0.6, 7.6, 0]],
    [particles[8], [3 + 0.6, 8.6, 0]],
    [particles[9], [3 + 0.6, 9.6, 0]],

    [particles[10], [3 + 1.6, 9.6, 0]],
    [particles[11], [3 + 2.6, 9.4, 0]],
    [particles[12], [3 + 3.6, 8.6, 0]],
    [particles[13], [3 + 4, 7.6, 0]],
    [particles[14], [3 + 3.6, 6.6, 0]],
    [particles[15], [3 + 2.6, 5.6, 0]],
    [particles[16], [3 + 1.6, 5.6, 0]],

    [particles[17], [3 + 1.6, 4.6, 0]],
    [particles[18], [3 + 2.6, 4.3, 0]],
    [particles[19], [3 + 3.6, 4, 0]],
    [particles[20], [3 + 4.3, 3.5, 0]],
    [particles[21], [3 + 4.7, 2.7, 0]],
    [particles[22], [3 + 4.6, 1.8, 0]],
    [particles[23], [3 + 3.6, 1.1, 0]],
    [particles[24], [3 + 2.6, 0.7, 0]],
    [particles[25], [3 + 1.6, 0.6, 0]],
  ]);

const FORM_TYPES = { RANDOM: "random", A: "a", B: "b" };
// funcs instead of just maps to force regenerating of random form positions
const formGettersMap = {
  [FORM_TYPES.RANDOM]: getRandomForm,
  [FORM_TYPES.A]: getALetterForm,
  [FORM_TYPES.B]: getBLetterForm,
};

interface ParticleProps {
  symbol: string;
  position: [number, number, number];
  formType: string;
}
function Particle({ symbol, position, formType }: ParticleProps) {
  const [hovered, setHover] = useState(false);
  const theme = useTheme();

  const [{ scale, position: pos }] = useSpring(
    () => ({
      scale: hovered ? 2 : 1,
      position: position,
      config: (key) => {
        switch (key) {
          case "position":
            return {
              duration: formType === FORM_TYPES.RANDOM ? 600 : 700,
              easing:
                formType === FORM_TYPES.RANDOM ? easings.easeOutQuint : easings.easeInOutElastic,
            };
          default:
            return {};
        }
      },
    }),
    [hovered, position],
  );

  return (
    <AnimatedText
      color={theme.palette.text.primary}
      position={pos}
      scale={scale}
      onPointerOver={(_event) => setHover(true)}
      onPointerOut={(_event) => setHover(false)}
    >
      {symbol}
    </AnimatedText>
  );
}

function CustomScene1() {
  const [currentFormType, setCurrentFormType] = useState(FORM_TYPES.A);

  const form = formGettersMap[currentFormType]();

  return (
    <>
      <Stack direction='row' sx={{ position: "absolute", top: 0, zIndex: 1, p: 0.5 }}>
        <Button
          sx={{ mr: 1 }}
          onClick={() => {
            setCurrentFormType(FORM_TYPES.RANDOM);
            setTimeout(() => {
              setCurrentFormType(FORM_TYPES.A);
            }, 600);
          }}
        >
          A
        </Button>
        <Button
          onClick={() => {
            setCurrentFormType(FORM_TYPES.RANDOM);
            setTimeout(() => {
              setCurrentFormType(FORM_TYPES.B);
            }, 600);
          }}
        >
          B
        </Button>
      </Stack>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense>
          <group scale={[0.35, 0.35, 1]} position={[-1.7, -2, 0]}>
            {/* <group> */}
            {particles.map((letter, index) => {
              return (
                <Particle
                  key={index}
                  symbol={letter}
                  formType={currentFormType}
                  position={form.get(letter) || [0, 0, 0]}
                />
              );
            })}
          </group>
        </Suspense>
      </Canvas>
    </>
  );
}

export default CustomScene1;
