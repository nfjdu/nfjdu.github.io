import { Configuration, OpenAIApi } from "openai";
import { appConfig } from "../../../config";
// import { encode } from "gpt-3-encoder";

const aiPrompt = `Imagine you are game NPC and you are programmer.
  Reply with some short text. Like joke, tip, quote, confuse, etc.`;
const configuration = new Configuration({
  apiKey: appConfig.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const tokenizedPromptLength = encode(aiPrompt).length;

export const generateDudeTalkingText = async () => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: aiPrompt }],
    temperature: 0,
    max_tokens: 1000,
    stream: false,
  });

  return response?.data?.choices[0].message?.content || "Hm...";
};
