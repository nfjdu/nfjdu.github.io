// import { Configuration, OpenAIApi } from "openai";
// import { appConfig } from "../../../config";
// import { encode } from "gpt-3-encoder";

// const aiPrompt = `Imagine you are programmer-npc.
//   Reply with some short text. Like joke, tip, quote, confuse, etc.`;
// const configuration = new Configuration({
//   apiKey: appConfig.OPEN_AI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const tokenizedPromptLength = encode(aiPrompt).length;

const generatedPhrazes = [
  "They say money can't buy happiness, but have you ever tried using the 'sudo' command?",
  "If debugging is the process of removing bugs, then programming must be the process of creating them in the first place!",
  "Pro tip: When in doubt, add more coffee. It's the magical fuel that powers us programmers.",
  "Why did the programmer quit his job? Because he didn't get arrays!",
  "Roses are #FF0000, violets are #0000FF. I'm stuck in an infinite loop, and my love for coding is true.",
  "Remember, a byte saved is a byte earned. Optimize your code and optimize your life.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Did you know that 80% of the bugs in a software system come from 20% of the code? It's called the Pareto bug principle.",
  "What's a programmer's favorite dance move? The if-else shuffle!",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
  "Knock, knock. Who's there? Java. Java who? I'd tell you a joke about Java, but it's not your type.",
  "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
  "Be careful when deleting files. Remember, in the digital world, there's no such thing as a 'Recycle Bin' for mistakes.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Life is like coding, don't forget to comment on the good parts.",
  "Two bytes meet. The first byte asks, 'Are you ill?' The second byte replies, 'No, just feeling a bit off.'",
  "Debugging: the art of finding someone else's mistakes.",
  "Code with passion, debug with patience.",
  "Remember, every bug is an opportunity to learn and grow.",
  "Debugging is like solving a puzzle with invisible pieces.",
  "Programming is the art of turning coffee into code.",
  "Keep calm and code on!",
  "Embrace the curly braces.",
  "Syntax error: Coffee not found. Deploy more caffeine!",
  "Programmers never die, they just get deprecated.",
  "Keep calm and refactor.",
  "Byte by byte, we build the world.",
  "Code is the universal language of problem-solving.",
];

function getRandomArrayElement(array: Array<any>) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const generateDudeTalkingText = async () => {
  // const response = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [{ role: "user", content: aiPrompt }],
  //   temperature: 0,
  //   max_tokens: 1000,
  //   stream: false,
  // });
  //
  // return response?.data?.choices[0].message?.content || "Hm...";

  // constant data array used because of OpenAI api license ran out
  return getRandomArrayElement(generatedPhrazes);
};
