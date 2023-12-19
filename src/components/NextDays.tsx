import { View } from "react-native";

import { Day, DayProps } from "@/components/Day";

interface NextDaysProps {
  data: DayProps[];
}

export function NextDays({ data }: NextDaysProps) {
  return (
    <View className="w-full bg-gray-800 rounded-xl p-3 flex-row justify-between items-center">
      {data.map((day) => (
        <Day key={day.day} data={day} />
      ))}
    </View>
  );
}
