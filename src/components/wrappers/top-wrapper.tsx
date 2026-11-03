import { LeftCircle, TopCircle } from "@/assets/icons";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TopWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();

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
        className="w-full items-center justify-start px-8 "
        style={{
          flex: 2.5,
          paddingBottom: insets.bottom + 10,
        }}
      >
        {children}
      </View>
    </View>
  );
}
