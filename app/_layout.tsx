// app/layout.tsx
import '@/global.css';
import { Stack } from "expo-router";
import { View, StatusBar } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
