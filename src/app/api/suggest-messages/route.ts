import { streamText, createTextStreamResponse, toTextStream } from "ai";
import { createGroq } from "@ai-sdk/groq";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export const runtime = "edge";

function getRandomTopics() {
  const topics = [
    "childhood memories",
    "travel dreams",
    "food adventures",
    "superpowers",
    "future technology",
    "music",
    "books",
    "nature",
    "friendship",
    "creativity",
    "sports",
    "movies",
    "life lessons",
    "bucket list",
    "funny moments",
  ];
  return topics
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)
    .join(", ");
}

export async function POST(request: Request) {
  try {
    const prompt = `Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction.

      Important rules:
      - Every time generate COMPLETELY DIFFERENT questions, never repeat previous ones
      - Use varied topics each time: travel, food, creativity, future, childhood memories, hobbies, music, books, dreams, nature, technology, etc.
      - Each question must be between 50-100 characters long — not too short, not too long
      - No long questions, straight to the point
      - Random seed: ${Math.random()}

      Output format: 'Question 1?||Question 2?||Question 3?'`;

    const result = streamText({
      model: groq("llama-3.1-8b-instant"),
      system:
        "You are a creative question generator. Output ONLY the questions separated by ||. No extra text, no numbering, no explanation, no preamble. Just: Question1?||Question2?||Question3?",
      prompt: `Generate exactly 3 unique open-ended questions for an anonymous social platform.
      Topics: ${getRandomTopics()}
      Seed: ${Math.random()}
      Rules:
      - Output ONLY questions separated by ||
      - Each question 50-100 characters
      - No extra text before or after`,
      temperature: 1.0,
      maxOutputTokens: 250,
    });

    return createTextStreamResponse({
      stream: toTextStream({ stream: result.stream }),
    });
  } catch (error) {
    console.error("An unexpected error occured", error);
    throw error;
  }
}
