export type QueueItem = {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
};

const CHARS = "!<>-_\\/[]{}—=+*^?#@$&_____";
const CHAR_CHANGE_PROBABILITY = 0.28;
const PHRASE_DURATION = 1800;

export const randomChar = (): string => CHARS[Math.floor(Math.random() * CHARS.length)];

export const createQueue = (oldText: string, newText: string): QueueItem[] => {
  const length = Math.max(oldText.length, newText.length);
  const queue: QueueItem[] = [];

  for (let i = 0; i < length; i++) {
    const from = oldText[i] || "";
    const to = newText[i] || "";
    const start = Math.floor(Math.random() * 40);
    const end = start + Math.floor(Math.random() * 40);
    queue.push({ from, to, start, end });
  }

  return queue;
};

export const processQueue = (queue: QueueItem[], frame: number): { output: string; complete: number } => {
  let output = "";
  let complete = 0;

  for (let i = 0; i < queue.length; i++) {
    let { from, to, start, end, char } = queue[i];
    
    if (frame >= end) {
      complete++;
      output += to;
    } else if (frame >= start) {
      if (!char || Math.random() < CHAR_CHANGE_PROBABILITY) {
        char = randomChar();
        queue[i].char = char;
      }
      output += `<span class='solt'>${char}</span>`;
    } else {
      output += from;
    }
  }

  return { output, complete };
};

export const CONSTANTS = {
  PHRASE_DURATION,
};
