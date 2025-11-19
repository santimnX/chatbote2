// hooks/useGeminChat.ts
import { useState } from 'react';

export const useGeminChat = () => {
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setLoading(true);

    try {
      // Usar OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`, // Cambia el nombre en .env
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 500
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { text: botMessage, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: 'Lo siento, hubo un error. Por favor intenta nuevamente.', 
        isUser: false 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    inputValue,
    setInputValue,
    handleSend,
    loading
  };
};

export default useGeminChat;