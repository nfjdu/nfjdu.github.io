import { darken, lighten, Typography } from "@mui/material";
import { memo } from "react";
import { useTextScramble } from "./useTextScramble";

interface TextScrambleEffectProps {
  phrases?: string[];
}

const DEFAULT_PHRASES = ["It's not a bug", "it's an undocumented", "feature."];

const TextScrambleEffect = memo(({ phrases = DEFAULT_PHRASES }: TextScrambleEffectProps) => {
  const { textRef, displayText } = useTextScramble(phrases);

  return (
    <Typography
      ref={textRef}
      variant='h6'
      sx={{
        "& .solt": {
          color: (t) =>
            t.palette.mode === "light"
              ? lighten(t.palette.text.primary, 0.5)
              : darken(t.palette.text.primary, 0.5),
        },
      }}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
});

TextScrambleEffect.displayName = "TextScrambleEffect";

export default TextScrambleEffect;
