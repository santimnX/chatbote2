// components/ChatInput.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity, ActivityIndicator, Text } from 'react-native';

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;  // Asegúrate de que esté definido
  loading?: boolean;
}

export default function ChatInput({ value, onChangeText, onSend, loading }: ChatInputProps) {
  return (
    <View className="flex-row items-center p-4 border-t border-gray-300 bg-white">
      <TextInput
        className="flex-1 border border-gray-300 rounded-full px-4 py-3 mr-2"
        placeholder="Escribe tu mensaje..."
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSend} // También funciona al presionar enter
        editable={!loading}
      />
      <TouchableOpacity
        className={`w-12 h-12 rounded-full items-center justify-center ${
          loading || !value.trim() ? 'bg-gray-400' : 'bg-blue-500'
        }`}
        onPress={onSend} // Aquí se usa onSend
        disabled={loading || !value.trim()}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className="text-white text-lg">↑</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}