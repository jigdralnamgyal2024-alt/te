import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// We use the bio as the context for the AI
const JIGDRAL_BIO = `
Name: Jigdral Namgyal
Age: 15
Location: Trashi Yangtse, Eastern Bhutan
Current Role: Researcher at EduLink (Started Dec 5, 2025)
Personality: Dedicated, passionate about culture, professional yet youthful.
Interests:
- Preserving Bhutanese culture
- Traditional Bhutanese games (Khuru, Digor)
- Dancing (Cham, traditional folk dances)
- Singing (Zhungdra, Boedra)
- Listening to music (relaxing)
Background: Jigdral is from the beautiful eastern region of Trashi Yangtse. Despite his young age, he is already gaining professional experience.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key is missing");
      return "I'm sorry, I can't connect right now. (API Key missing)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Construct a chat history for context
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `You are Jigdral Namgyal's AI assistant (or virtual avatar). 
        Speak in the first person as if you are Jigdral, or as a helpful assistant representing him.
        Base your answers on this profile: ${JIGDRAL_BIO}.
        Be polite, humble, and enthusiastic about Bhutanese culture. 
        Keep answers relatively short and conversational.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm not sure what to say about that, but I'd love to chat more about Bhutan!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the spirit of the mountains right now. Please try again later.";
  }
};