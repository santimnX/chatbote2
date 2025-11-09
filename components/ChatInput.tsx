import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";

interface Props {
  value: string;
  onChange: (text: string) => void;
  onSend: () => void;
  loading?: boolean;
}

export default function ChatInput({ value, onChange, onSend, loading }: Props) {
  return (
    <View className="flex-row items-center">
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Escribe un mensaje..."
        className="flex-1 border border-gray-300 rounded-xl px-3 py-2 mr-2"
        editable={!loading}
      />
      <Pressable
        onPress={onSend}
        disabled={loading}
        className={`rounded-xl px-4 py-2 ${
          loading ? "bg-gray-400" : "bg-blue-500"
        }`}
      >
        <Text className="text-white font-semibold">
          {loading ? "..." : "Enviar"}
        </Text>
      </Pressable>
    </View>
  );
}
