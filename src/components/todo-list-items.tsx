import { PlusIcon } from "@/assets/icons";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomCheckBox from "./custom-checkbox";

const items = [
  "Learning Programming by 12PM",
  "Learn how to cook by 1PM",
  "Learn how to play at 2PM",
  "Have lunch at 4PM",
  "Going to travel 6PM",
  "Learning Programming by 12PM",
  "Learn how to cook by 1PM",
  "Learn how to play at 2PM",
  "Have lunch at 4PM",
  "Going to travel 6PM",
  "Learning Programming by 12PM",
  "Learn how to cook by 1PM",
  "Learn how to play at 2PM",
  "Have lunch at 4PM",
  "Going to travel 6PM",
];

export default function ToDoListItems() {
  return (
    <>
      <Text className="mb-4 mt-auto flex w-full text-left font-poppins-semibold text-black">
        Task list
      </Text>
      <View className="mt-auto flex w-full flex-1 rounded-lg bg-white px-6 pb-10 pt-6 shadow-lg">
        <View className="my-2 flex flex-row items-center justify-between">
          <Text className="font-poppins text-[12px] text-gray-600">
            Daily Task
          </Text>
          <TouchableOpacity onPress={() => Alert.alert("Deneme")}>
            <PlusIcon />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          className="mt-2 flex-1"
        >
          <View className="flex w-full flex-col gap-4">
            {items.map((elem, index) => (
              <CustomCheckBox
                key={index}
                title={elem}
                value={false}
                onCheckChanged={() => {}}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
