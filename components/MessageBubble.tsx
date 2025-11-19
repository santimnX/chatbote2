// components/MessageBubble.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Message } from '@/types';

interface MessageBubbleProps extends Omit<Message, 'timestamp'> {
  timestamp?: Date;
}

export default function MessageBubble({ text, isUser, timestamp }: MessageBubbleProps) {
  return (
    <View className={`flex-row my-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <View 
        className={`max-w-[80%] rounded-2xl p-3 ${
          isUser 
            ? 'bg-blue-500 rounded-br-none' 
            : 'bg-gray-200 rounded-bl-none'
        }`}
      >
        <Text 
          className={`text-sm ${
            isUser ? 'text-white' : 'text-gray-800'
          }`}
        >
          {text}
        </Text>
        {timestamp && (
          <Text 
            className={`text-xs mt-1 ${
              isUser ? 'text-blue-200' : 'text-gray-500'
            }`}
          >
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        )}
      </View>
    </View>
  );
}