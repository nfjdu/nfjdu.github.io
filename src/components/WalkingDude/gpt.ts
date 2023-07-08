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
  "Code never lies; it reveals the truth behind the logic.",
  "Embrace the curly braces.",
  "Programmers dream in code, but their coffee runs on dreams.",
  "Coding is like art: everyone has their unique style.",
  "Perseverance is the key to conquering complex algorithms.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Byte by byte, we build the world.",
  "Code with passion, debug with patience.",
  "Handle errors gracefully; provide informative error messages.",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
  "Be careful when deleting files. Remember, in the digital world, there's no such thing as a 'Recycle Bin' for mistakes.",
  "Failure is not an error, it's a step towards success in programming.",
  "Stay humble, for there's always more to learn in coding.",
  "Debugging is like solving a puzzle with invisible pieces.",
  "Practice code review to learn from others and improve code quality.",
  "Keep dependencies up to date to benefit from bug fixes and improvements.",
  "Why did the programmer quit his job? Because he didn't get arrays!",
  "Coding is like solving puzzles that you create for yourself.",
  "The best code is self-explanatory, like a well-written story.",
  "Why do Java developers wear glasses? Because they don't C#!",
  "Follow the SOLID principles for better software design.",
  "Test your code thoroughly. Unit tests are your safety net against unexpected bugs.",
  "Always validate and sanitize user input to prevent security vulnerabilities.",
  "Write modular code to promote reusability.",
  "Don't repeat yourself (DRY principle). Write reusable code to avoid duplication and make maintenance easier.",
  "Programmers make the world go binary.",
  "What's a programmer's favorite dance move? The if-else shuffle!",
  "Life is like coding, don't forget to comment on the good parts.",
  "A byte saved is a byte earned. Optimize your code!",
  "Code is power, wield it wisely.",
  "Remember, every bug is an opportunity to learn and grow.",
  "Profile and optimize bottlenecks for better performance.",
  "Why did the programmer get stuck in the shower? The instructions said: 'Lather, Rinse, Repeat' but they couldn't find the base case!",
  "Stay curious, keep coding, and never stop learning.",
  "Document your code to make it easier for others to understand.",
  "In coding, precision is key; even a small typo can cause big trouble.",
  "Syntax error: Coffee not found. Deploy more caffeine!",
  "Avoid deep nesting; aim for flatter code structures.",
  "Keep your code DRY (Don't Repeat Yourself) to avoid redundancy.",
  "Use meaningful variable names. Remember, code is read more often than it's written.",
  "Programming is the art of turning coffee into code.",
  "Avoid unnecessary complexity; simplicity is key.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "The beauty of programming lies in its endless possibilities.",
  "Programming languages evolve, but logic remains timeless.",
  "Coding is a language that connects humans and machines.",
  "Debugging: the art of finding someone else's mistakes.",
  "Programmers never die, they just get deprecated.",
  "Optimize for readability; code is read more often than it's written.",
  "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
  "Use meaningful names for variables, functions, and classes.",
  "Use version control to track changes and collaborate effectively.",
  "Refactor regularly to improve code maintainability.",
  "Don't fear bugs, embrace them as learning opportunities.",
  "The best programs are written with passion, not just instructions.",
  "Test your code early and frequently to catch bugs sooner.",
  "Did you know that 80% of the bugs in a software system come from 20% of the code? It's called the Pareto bug principle.",
  "If debugging is the process of removing bugs, then programming must be the process of creating them in the first place!",
  "Pro tip: When in doubt, add more coffee. It's the magical fuel that powers us programmers.",
  "Write comments to explain the why, not the what. Good comments provide insights into the thought process.",
  "Knock, knock. Who's there? Java. Java who? I'd tell you a joke about Java, but it's not your type.",
  "Break down complex tasks into smaller, reusable functions.",
  "A good programmer writes code that others can understand.",
  "Write self-documenting code; make your intentions clear.",
  "In programming, imagination is your greatest asset.",
  "Don't optimize prematurely; focus on writing clean, working code first.",
  "They say money can't buy happiness, but have you ever tried using the 'sudo' command?",
  "Keep calm and refactor.",
  "Roses are #FF0000, violets are #0000FF. I'm stuck in an infinite loop, and my love for coding is true.",
  "The keyboard is mightier than the sword in the digital realm.",
  "I told a joke in binary, but only 10 types of people understood it.",
  "Keep calm and code on!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Remember, a byte saved is a byte earned. Optimize your code and optimize your life.",
  "Code is the universal language of problem-solving.",
  "Practice version control. Git can save you from countless headaches and help collaborate effectively.",
  "Two bytes meet. The first byte asks, 'Are you ill?' The second byte replies, 'No, just feeling a bit off.'",
  "Programming: turning ideas into reality, one line at a time.",
  "Keep learning and exploring new technologies; embrace lifelong learning.",
  "Why did the programmer go broke? Because he lost his domain in a bet!",
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
