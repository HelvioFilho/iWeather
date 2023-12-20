import {
  View,
  TextInput,
  TextInputProps,
  ActivityIndicator,
} from "react-native";

import { colors } from "@/constants/Colors";

type InputProps = TextInputProps & {
  isLoading?: boolean;
};

export function Input({ isLoading = false, ...rest }: InputProps) {
  return (
    <View className="w-full h-12 bg-gray-600 rounded-lg px-5 flex-row">
      <TextInput
        className="flex-1 font-regular text-base text-white"
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />

      {isLoading && (
        <ActivityIndicator
          testID="activity-indicator"
          color={colors.blue.light}
        />
      )}
    </View>
  );
}
