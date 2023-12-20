import { Text, TouchableOpacity, View } from "react-native";

import { Input } from "@/components/Input";
import { CityProps } from "@/services/getCityByNameService";

type SelectListProps = {
  isLoading?: boolean;
  placeholder?: string;
  value?: string;
  data: CityProps[];
  onChange: (value: string) => void;
  onPress: (value: CityProps) => void;
};

export function SelectList(props: SelectListProps) {
  return (
    <View className="w-full relative z-10 m-0">
      <Input
        testID="search-input"
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        isLoading={props.isLoading}
        value={props.value}
      />

      <View
        testID="options"
        className="absolute overflow-hidden rounded-lg top-16 left-0 right-0"
      >
        {props.data.map((item) => (
          <TouchableOpacity
            key={item.latitude}
            activeOpacity={0.7}
            onPress={() => props.onPress(item)}
          >
            <Text className="font-regular text-base text-gray-100 py-5 px-4 border-b border-b-gray-600 bg-gray-500">
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
