import { LeftCircle, TopCircle } from "@/assets/icons";
import { View } from "react-native";

export default function TopWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="w-full flex-1">
      <View style={{ flex: 1 }} className="relative w-full">
        <View className="absolute left-0 top-0">
          <TopCircle />
        </View>
        <View className="absolute left-0 top-0">
          <LeftCircle />
        </View>
      </View>
      <View
        className="w-full items-center justify-start px-8 pb-16"
        style={{
          flex: 2.5,
        }}
      >
        {children}
      </View>
    </View>
  );
}
