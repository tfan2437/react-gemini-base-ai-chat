import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useState } from "react";

const GeminiAPI = () => {
  const [userInput, setUserInput] = useState("");

  //   const apiKey = import.meta.env.VITE_API_KEY;
  //   const genAI = new GoogleGenerativeAI(apiKey);

  //   const model = genAI.getGenerativeModel({
  //     model: "gemini-1.5-pro",
  //   });

  //   const generationConfig = {
  //     temperature: 1,
  //     topP: 0.95,
  //     topK: 64,
  //     maxOutputTokens: 8192,
  //     responseMimeType: "text/plain",
  //   };

  //   const run = async (prompt) => {
  //     const chatSession = model.startChat({
  //       generationConfig,
  //       // safetySettings: Adjust safety settings
  //       // See https://ai.google.dev/gemini-api/docs/safety-settings
  //       history: [],
  //     });

  //     const result = await chatSession.sendMessage(prompt);
  //     console.log(result.response.text());
  //     console.log("Request Success");
  //   };

  const handlePrompt = async (prompt) => {
    await run(prompt);
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => handlePrompt(userInput)}>Generative</button>
    </div>
  );
};

export default GeminiAPI;
