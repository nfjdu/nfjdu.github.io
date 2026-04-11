import { useEffect, useRef, useState, useCallback } from "react";
import { QueueItem, createQueue, processQueue, CONSTANTS } from "./utils";

export const useTextScramble = (phrases: string[]) => {
  const textRef = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = useState<string>("");
  const frameRequestRef = useRef<number>(0);

  const setScrambledText = useCallback((newText: string): void => {
    const oldText = textRef.current?.textContent || "";
    const queue: QueueItem[] = createQueue(oldText, newText);

    let frame = 0;
    const update = (): void => {
      const { output, complete } = processQueue(queue, frame);
      setDisplayText(output);

      if (complete < queue.length) {
        frameRequestRef.current = requestAnimationFrame(update);
        frame++;
      }
    };

    cancelAnimationFrame(frameRequestRef.current);
    update();
  }, []);

  useEffect(() => {
    let counter = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const next = (): void => {
      setScrambledText(phrases[counter]);
      timeoutId = setTimeout(() => {
        counter = (counter + 1) % phrases.length;
        next();
      }, CONSTANTS.PHRASE_DURATION);
    };

    next();

    return () => {
      cancelAnimationFrame(frameRequestRef.current);
      clearTimeout(timeoutId);
    };
  }, [phrases, setScrambledText]);

  return { textRef, displayText };
};
