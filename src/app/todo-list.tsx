import ToDoListItems from "@/components/single-items/todo-list-items";
import ToDoListTopWrapper from "@/components/wrappers/todo-list-top-section";
import { getGreeting } from "@/utils";
import { images } from "@/utils/images";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function ToDoList() {
  const { email, fullName } = useLocalSearchParams<{
    email: string;
    fullName: string;
  }>();
  return (
    <View className="flex-1 items-center justify-center bg-bgcolor ">
      <ToDoListTopWrapper fullName={fullName} />
      <View
        className="w-full items-center justify-start px-8 pb-16"
        style={{
          flex: 3,
        }}
      >
        <Text className="my-4 flex items-center self-end text-right font-poppins-semibold font-semibold text-black">
          {getGreeting()}
        </Text>
        <Image source={images.clock} width={120} height={120} />
        <ToDoListItems />
      </View>
    </View>
  );
}
