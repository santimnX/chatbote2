import { useState } from "react";
import { Message } from "../utils/types";

export default function useGeminiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: userMessage.content }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Lo siento, no entendí la pregunta 😅";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: botText,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error al conectar con Gemini:", error);
      const errorMsg: Message = {
        id: (Date.now() + 2).toString(),
        role: "bot",
        content: "❌ Error al conectar con la API de Gemini.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return { messages, inputValue, setInputValue, handleSend };
}
