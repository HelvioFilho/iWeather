import { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";

import { SelectList } from "@/components/SelectList";

import { useCity } from "@/hooks/useCity";
import {
  CityProps,
  getCityByNameService,
} from "@/services/getCityByNameService";

import Logo from "@/assets/logo.svg";
import bg from "@/assets/background.png";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);

  const dimensions = Dimensions.get("window");

  const { handleChanceCity } = useCity();

  async function getCities(city: string) {
    setIsLoading(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  return (
    <ScrollView>
      <ImageBackground
        className="p-6 pt-12 items-center mb-1"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
        source={bg}
        defaultSource={bg}
        resizeMode="cover"
      >
        <Logo width={186} height={32} />
        <View className="flex-1 w-full justify-center pb-14">
          <Text className="font-bold text-xl text-white text-center">
            Boas vindas ao <Text className="text-blue-light">iWeather</Text>
          </Text>

          <Text className="font-regular text-sm text-gray-200 text-center mt-1 mb-8">
            Escolha um local para ver a previsão do tempo
          </Text>

          <SelectList
            data={cities}
            onChange={setSearch}
            isLoading={isLoading}
            onPress={handleChanceCity}
            placeholder="Buscar local"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
