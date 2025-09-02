import { Stack } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import TypographyNoMargin from "../../../../components/TypographyNoMargin";

interface Props {}

enum ANIMATION_STATE_ENUM {
  WRITING = 1,
  CLEANUP = 2,
}
enum PHRAZES_ENUM {
  PHRAZE1 = "Hello world!",
  PHRAZE2 = "What a beautiful day :)",
  PHRAZE3 = "Let's code something...",
}

export function getNextPhraze(phraze: PHRAZES_ENUM) {
  switch (phraze) {
    case PHRAZES_ENUM.PHRAZE1: {
      return PHRAZES_ENUM.PHRAZE2;
    }
    case PHRAZES_ENUM.PHRAZE2: {
      return PHRAZES_ENUM.PHRAZE3;
    }
    case PHRAZES_ENUM.PHRAZE3: {
      return PHRAZES_ENUM.PHRAZE1;
    }
    default: {
      return PHRAZES_ENUM.PHRAZE1;
    }
  }
}

const TypewriterEffect = ({}: Props) => {
  const [currentPhraze, setCurrentPhraze] = useState(PHRAZES_ENUM.PHRAZE3);
  const [currentStep, setCurrentStep] = useState<ANIMATION_STATE_ENUM>(
    ANIMATION_STATE_ENUM.WRITING,
  );

  const startWriting = useCallback((_currentPhraze: PHRAZES_ENUM) => {
    setCurrentPhraze(_currentPhraze);
    setCurrentStep(ANIMATION_STATE_ENUM.WRITING);

    setTimeout(() => {
      startCleanup(getNextPhraze(_currentPhraze));
    }, 3000);
  }, []);

  const startCleanup = useCallback((_currentPhraze: PHRAZES_ENUM) => {
    setCurrentStep(ANIMATION_STATE_ENUM.CLEANUP);
    setTimeout(() => {
      startWriting(_currentPhraze);
    }, 2000);
  }, []);

  useEffect(() => {
    startWriting(PHRAZES_ENUM.PHRAZE1);
  }, []);

  return (
    <Stack sx={{ width: "fit-content", maxWidth: "100%" }}>
      <TypographyNoMargin
        sx={{
          fontSize: "clamp(12px, 5vw, 28px) !important",
          fontFamily: "monospace",
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
