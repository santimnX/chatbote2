import { View } from "react-native";
import ChatBot from "../components/ChatBot";
import useGeminiChat from "@/hooks/useGeminiChat";

export default function Index() {
  const { messages, inputValue, setInputValue, handleSend, loading } = useGeminiChat();

  return (
    <View className="flex-1 bg-white">
      <ChatBot
        messages={messages}
        inputValue={inputValue}
        onChangeInput={setInputValue}
        onSend={handleSend}
        loading={loading}
      />
    </View>
  );
}