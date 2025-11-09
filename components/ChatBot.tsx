import React from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import { Message } from "../utils/types";

interface Props {
  messages: Message[];
  inputValue: string;
  onChangeInput: (text: string) => void;
  onSend: () => void;
  loading?: boolean;
}

export default function ChatBot({
  messages,
  inputValue,
  onChangeInput,
  onSend,
  loading,
}: Props) {
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 px-4 py-6">
        <ScrollView className="flex-1 mb-3">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </ScrollView>

        <ChatInput
          value={inputValue}
          onChange={onChangeInput}
          onSend={onSend}
          loading={loading}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
