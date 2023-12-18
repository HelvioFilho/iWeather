import { colors } from "@/constants/Colors";
import { ActivityIndicator, View } from "react-native";

type LoadingProps = {
  size?: "small" | "large";
};

export function Loading({ size = "small" }: LoadingProps) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <ActivityIndicator color={colors.blue.light} size={size} />
    </View>
  );
}
