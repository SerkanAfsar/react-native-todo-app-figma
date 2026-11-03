import { LoginImage } from "@/assets/icons";
import CustomButton from "@/components/ui/custom-button";
import CustomInput from "@/components/ui/custom-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import TopWrapper from "@/components/wrappers/top-wrapper";
import { loginSchema } from "@/schemas";
import { LoginType, UserType } from "@/types";
import { getItem } from "@/utils";

export default function Login() {
  const router = useRouter();
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      eMail: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginType) => {
    const item = await getItem<UserType>({ key: "user" });
    if (!item) {
      Alert.alert("User Bulunamadı!");
    }
    if (item?.eMail === data.eMail && item.password === data.password) {
      return router.push({
        pathname: "/todo-list",
        params: { email: item.eMail, fullName: item.fullName },
      });
    } else {
      Alert.alert("Bilgiler Yanlış...");
    }
  };

  return (
    <TopWrapper>
      <Text className="font-poppins-bold text-[18px] text-black">
        Welcome back
      </Text>
      <View className="my-10">
        <LoginImage />
      </View>
      <View className="mt-auto flex  w-full flex-col gap-4">
        <Controller
          name="eMail"
          control={control}
          render={({ field }) => {
            return (
              <View className="w-full">
                <CustomInput
                  className="w-full"
                  placeholder="Enter Your EMail..."
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {errors.eMail && (
                  <Text className="mx-4 mt-2 w-full text-red-600">
                    {errors.eMail.message}
                  </Text>
                )}
              </View>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            return (
              <View className="w-full">
                <CustomInput
                  className="w-full"
                  placeholder="Enter Your Password..."
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {errors.password && (
                  <Text className="mx-4 mt-2 w-full text-red-600">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity className="mt-auto">
        <Text className="font-poppins text-[13px] text-primary">
          Forget password ?
        </Text>
      </TouchableOpacity>
      <View className="mt-auto flex w-full">
        <CustomButton
          title="Login"
          onPress={async () => await handleSubmit(onSubmit)()}
        />
        <View className="mt-4 flex w-full flex-row items-center justify-center text-center">
          <Text className="font-poppins text-[16px] font-normal text-black">
            Don’t have an account ?
          </Text>
          <TouchableOpacity
            disabled={isSubmitting}
            className="ml-2"
            onPress={() => router.push("/register")}
          >
            <Text className="font-poppins text-[16px] font-normal text-primary">
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TopWrapper>
  );
}
