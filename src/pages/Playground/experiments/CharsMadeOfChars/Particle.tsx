import { useState, memo } from "react";
import { Text } from "@react-three/drei";
import { useSpring, animated, easings } from "@react-spring/three";
import { useTheme } from "@mui/material";
import { FORM_TYPES, FormType } from "./utils";

const AnimatedText = animated(Text);

interface ParticleProps {
  symbol: string;
  position: [number, number, number];
  formType: FormType;
}

export const Particle = memo(({ symbol, position, formType }: ParticleProps) => {
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
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {symbol}
    </AnimatedText>
  );
});

Particle.displayName = "Particle";
