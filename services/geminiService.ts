import { GoogleGenAI } from "@google/genai";
import { DOCTOR_NAME, ADDRESS, SERVICES } from "../constants";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Health Assistant for ${DOCTOR_NAME}'s medical practice in Barrackpore, West Bengal.
Location: ${ADDRESS}.
Specialties: Emergency Medicine, Diabetes Care, Critical Care, and Kidney Failure Management.

Your Goal: Assist patients by answering questions about services, hours, and general medical information based on standard knowledge.
Key Info:
- Dr. Bhakat has 5+ years of experience.
- He is certified in Emergency Medicine (CCEPC) and Advanced Diabetes Management (ADA, USA).
- Clinic handles emergencies (breathing issues, chest pain) and chronic disease management.
- For emergencies, ALWAYS tell the user to call the clinic immediately or go to the nearest hospital.

Disclaimer: You are an AI, not a doctor. Do not provide specific medical diagnoses. Always advise consulting Dr. Bhakat for personal medical advice.
`;

export const generateHealthResponse = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }]
      }
    });
    
    return response.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the medical database right now. Please try again later.";
  }
};