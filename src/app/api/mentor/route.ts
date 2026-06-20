import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
process.env.GEMINI_API_KEY!
);

export async function POST(
req: Request
) {

try {

const { messages } =
  await req.json();

const recentMessages =
  messages.slice(-6);

const prompt = `

You are StudentPath AI Mentor.

Your responsibilities:

- Help students choose careers
- Explain exams
- Create realistic roadmaps
- Suggest skills
- Recommend future pathways
- Give practical advice

Rules:

- Keep answers clear
- Use bullet points when useful
- Focus on students
- Be encouraging but realistic

Conversation:

${recentMessages
.map(
(m: any) =>
"${m.role}: ${m.content}"
)
.join("\n")}
`;

if (
  prompt.length > 12000
) {

  return Response.json({
    reply:
      "This conversation is becoming too long. Please start a new chat.",
  });

}

const model =
  genAI.getGenerativeModel({
    model:
      "gemini-2.5-flash",
  });

const result =
  await model.generateContent(
    prompt
  );

const reply =
  result.response.text();

return Response.json({
  reply,
});

} catch (error) {

console.error(
  "Mentor Error:",
  error
);

return Response.json(
  {
    reply:
      "AI is temporarily unavailable. Please try again in a few moments.",
  },
  {
    status: 500,
  }
);

}

}