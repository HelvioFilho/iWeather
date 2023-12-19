import { ImageBackground, Text, View } from "react-native";
import dayjs from "dayjs";

import { isDayTime } from "@/utils/isDayTime";
import { weatherIcons } from "@/utils/weatherIcons";

export type WeatherTodayProps = {
  temp: string;
  temp_min: string;
  temp_max: string;
  description: string;
  details: typeof weatherIcons.Clouds;
};

type Props = {
  city: string;
  weather: WeatherTodayProps;
};

export function WeatherToday({ weather, city }: Props) {
  const today = dayjs(new Date()).format("dddd, DD [de] MMMM [de] YYYY");
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const Icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;

  return (
    <ImageBackground
      className="bg-gray-700 p-5 rounded-lg justify-between overflow-hidden"
      resizeMode="cover"
      source={bgImg}
    >
      <View>
        <Text className="font-bold text-base text-gray-100">{city}</Text>

        <Text className="font-regular text-xs text-gray-100">{today}</Text>
      </View>

      <View className="w-full flex-row">
        <View className="flex-1 justify-end mb-4">
          <Text className="font-extraBold text-5xl text-gray-white">
            {weather.temp}
          </Text>

          <Text className="font-bold text-base text-white">
            {weather.temp_min} / {weather.temp_max}
          </Text>

          <Text className="font-regular text-sm text-white capitalize">
            {weather.description}
          </Text>
        </View>

        <Icon width={160} height={160} />
      </View>
    </ImageBackground>
  );
}
