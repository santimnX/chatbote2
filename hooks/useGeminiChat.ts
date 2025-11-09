import { useState } from "react";
import { Message } from "../utils/types";

// Simulación temporal (luego puedes integrar API real de Gemini)
export default function useGeminiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulación del bot
    setTimeout(() => {
      const botReply: Message = {
        id: Date.now().toString(),
        role: "bot",
        content: `🤖 Gemini dice: "${newMessage.content}"`,
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  return {
    messages,
    inputValue,
    setInputValue,
    handleSend,
  };
}
