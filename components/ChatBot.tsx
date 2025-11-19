// components/ChatBot.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import { ChatBotProps } from '@/types';

export default function ChatBot({ 
  messages, 
  inputValue, 
  onChangeInput, 
  onSend, 
  loading = false 
}: ChatBotProps) {
  
  return (
    <View className="flex-1 bg-gray-50">
      {/* Lista de mensajes */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MessageBubble 
            text={item.text} 
            isUser={item.isUser} 
            timestamp={item.timestamp}
          />
        )}
        className="flex-1 p-4"
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      
      {/* Input de chat - PASA las props correctamente */}
      <ChatInput
        value={inputValue}
        onChangeText={onChangeInput}
        onSend={onSend}
        loading={loading}
      />
    </View>
  );
}