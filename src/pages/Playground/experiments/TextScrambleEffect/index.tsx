import { darken, lighten, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

type QueueItem = {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
};

type TextScrambleEffectProps = {
  phrases?: string[];
};

const TextScrambleEffect: React.FC<TextScrambleEffectProps> = ({
  phrases = ["It’s not a bug", "it’s an undocumented", "feature."],
}) => {
  const textRef = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = useState<string>("");
  const chars = "!<>-_\\/[]{}—=+*^?#@$&_____";
  let frameRequest: number;

  const randomChar = (): string => chars[Math.floor(Math.random() * chars.length)];

  const setScrambledText = (newText: string): void => {
    const oldText = textRef.current?.textContent || "";
    const length = Math.max(oldText.length, newText.length);
    let queue: QueueItem[] = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    let frame = 0;
    const update = (): void => {
      let output = "";
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = randomChar();
            queue[i].char = char;
          }
          output += `<span class='solt'>${char}</span>`;
        } else {
          output += from;
        }
      }
      setDisplayText(output);

      if (complete < queue.length) {
        frameRequest = requestAnimationFrame(update);
        frame++;
      }
    };

    cancelAnimationFrame(frameRequest);
    update();
  };

  useEffect(() => {
    let counter = 0;
    const next = (): void => {
      setScrambledText(phrases[counter]);
      setTimeout(() => {
        counter = (counter + 1) % phrases.length;
        next();
      }, 1800);
    };
    next();

    return () => cancelAnimationFrame(frameRequest);
  }, []);

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
    ></Typography>
  );
};

export default TextScrambleEffect;
