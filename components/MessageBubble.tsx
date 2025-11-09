import React from "react";
import { View, Text } from "react-native";
import { Message } from "../utils/types";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <View className={`my-2 flex ${isUser ? "items-end" : "items-start"}`}>
      <View
        className={`px-4 py-2 rounded-2xl max-w-[80%] ${
          isUser ? "bg-green-300" : "bg-gray-200"
        }`}
      >
        <Text className="text-base text-black">{message.content}</Text>
      </View>
    </View>
  );
}
