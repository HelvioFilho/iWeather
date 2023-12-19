import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

export type DayProps = {
  icon: React.FC<SvgProps>;
  day: string;
  weather: string;
  max: string;
  min: string;
};

type Props = {
  data: DayProps;
};

export function Day({ data }: Props) {
  const { icon: Icon } = data;

  return (
    <View className="items-center">
      <Text className="font-bold text-sm text-gray-200">{data.day}</Text>

      <Icon width={56} height={56} />

      <Text className="font-bold text-sm text-gray-100">{data.max}</Text>

      <Text className="font-bold text-sm text-gray-400">{data.min}</Text>
    </View>
  );
}
