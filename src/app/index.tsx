import { WellCome } from "@/assets/icons";
import CustomButton from "@/components/custom-button";
import TopWrapper from "@/components/top-wrapper";
import { getItem } from "@/utils";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function Index() {
  const router = useRouter();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const process = async () => {
      const result = await getItem({ key: "user" });
      setName(result ? "Login" : "Register");
    };
    process();
  }, []);

  const handlePress = async () => {
    const result = await getItem({ key: "user" });
    return router.push(result ? "/login" : "/register");
  };

  return (
    <TopWrapper>
      <WellCome />
      <Text className="mt-16 font-poppins-bold text-[18px] text-black">
        Gets things with TODs
      </Text>
      <Text className="mt-4 max-w-[203px] text-center font-poppins text-[13px] leading-6 text-black/80">
        Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
        Consequat urna quam felis interdum quisque. Malesuada adipiscing
        tristique ut eget sed.
      </Text>
      <CustomButton
        title={name}
        className="mt-auto"
        onPress={async () => await handlePress()}
      />
    </TopWrapper>
  );
}
