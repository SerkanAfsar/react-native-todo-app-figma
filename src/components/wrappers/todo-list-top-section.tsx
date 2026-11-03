import { LeftCircle, TopCircle } from "@/assets/icons";
import { images } from "@/utils/images";
import { Image, Text, View } from "react-native";

export default function ToDoListTopWrapper({ fullName }: { fullName: string }) {
  return (
    <View
      className="relative w-full bg-primary"
      style={{
        flex: 2,
      }}
    >
      <View className="absolute left-0 top-0">
        <TopCircle />
      </View>
      <View className="absolute left-0 top-0">
        <LeftCircle />
      </View>
      <View className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center">
        <Image source={images.userImage} width={100} height={100} />
        <Text className="my-4 font-poppins-bold text-[18px]  text-white">
          Welcome {fullName}
        </Text>
      </View>
    </View>
  );
}
