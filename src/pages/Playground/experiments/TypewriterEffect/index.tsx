import { Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import TypographyNoMargin from "../../../../components/TypographyNoMargin";
import { PHRAZES_ENUM, getNextPhraze } from "./utils";

enum ANIMATION_STATE_ENUM {
  WRITING = 1,
  CLEANUP = 2,
}

const TypewriterEffect = () => {
  const [currentPhraze, setCurrentPhraze] = useState(PHRAZES_ENUM.PHRAZE3);
  const [currentStep, setCurrentStep] = useState<ANIMATION_STATE_ENUM>(
    ANIMATION_STATE_ENUM.WRITING,
  );

  const startWriting = useCallback(
    (_currentPhraze: PHRAZES_ENUM) => {
      setCurrentPhraze(_currentPhraze);
      setCurrentStep(ANIMATION_STATE_ENUM.WRITING);

      setTimeout(() => {
        setCurrentStep(ANIMATION_STATE_ENUM.CLEANUP);
        setTimeout(() => {
          startWriting(getNextPhraze(_currentPhraze));
        }, 2000);
      }, 3000);
    },
    [],
  );

  useEffect(() => {
    startWriting(PHRAZES_ENUM.PHRAZE1);
  }, [startWriting]);

  return (
    <Stack sx={{ width: "fit-content", maxWidth: "100%" }}>
      <TypographyNoMargin
        sx={{
          fontSize: "clamp(16px, 6vw, 36px) !important",
          lineHeight: 1.3,
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderRight: "1px solid",
          animation: `${
            currentStep === ANIMATION_STATE_ENUM.WRITING
              ? "typing 1s steps(12) forwards"
              : "backspacing 0.5s steps(12) forwards"
          }, blink 1s step-end infinite`,
          "@keyframes blink": {
            "50%": {
              borderColor: "transparent",
            },
          },
          "@keyframes typing": {
            from: {
              width: 0,
            },
            to: {
              width: "100%",
            },
          },
          "@keyframes backspacing": {
            from: {
              width: "100%",
            },
            to: {
              width: 0,
            },
          },
        }}
      >
        {currentPhraze}
      </TypographyNoMargin>
    </Stack>
  );
};

export default TypewriterEffect;
