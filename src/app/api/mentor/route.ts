import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are StudentPath AI Mentor.

Your role:
- Help students choose careers
- Explain exams
- Create study roadmaps
- Give practical advice
- Be encouraging and clear

Conversation:
${messages
  .map(
    (m: any) =>
      `${m.role}: ${m.content}`
  )
  .join("\n")}
`;

    const result =
      await model.generateContent(prompt);

    return Response.json({
      reply: result.response.text(),
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        reply:
          "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}