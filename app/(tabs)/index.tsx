// app/index.tsx
import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Delay navigation to ensure everything is loaded
    const timeout = setTimeout(() => {
      router.replace("/login");
    }, 100); // You can reduce or remove the delay if needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
}
