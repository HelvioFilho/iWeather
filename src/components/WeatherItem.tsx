import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

type WeatherItemProps = {
  icon: React.FC<SvgProps>;
  title: string;
  value: string;
  isLast?: boolean;
};

export function WeatherItem({
  icon: Icon,
  title,
  value,
  isLast = false,
}: WeatherItemProps) {
  return (
    <View
      className={`
        w-full 
        flex-row 
        items-center 
        py-5
        ${isLast && "border-b border-b-gray-700"}
      `}
    >
      <Icon width={24} height={24} />

      <Text className="flex-1 font-bold text-sm text-gray-200 ml-3">
        {title}
      </Text>

      <Text className="font-bold text-base text-gray-100">{value}</Text>
    </View>
  );
}
