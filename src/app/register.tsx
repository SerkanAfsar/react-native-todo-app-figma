import CustomButton from "@/components/custom-button";
import CustomInput from "@/components/custom-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

import TopWrapper from "@/components/top-wrapper";
import { registerSchema } from "@/schemas";
import { RegisterType, UserType } from "@/types";
import { cn, SetItem } from "@/utils";

export default function Register() {
  const router = useRouter();
  const {
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: { eMail: "", fullName: "", password: "", rePassword: "" },
  });

  const onSubmit = async (data: RegisterType) => {
    const userData: UserType = {
      eMail: data.eMail,
      fullName: data.fullName,
      password: data.password,
    };

    let result = await SetItem({ key: "user", value: userData });
    if (result) {
      router.push("/login");
    }
    return;
  };
  return (
    <TopWrapper>
      <Text className="font-poppins-bold text-[18px] text-black">
        Welcome to Onboard!
      </Text>
      <Text className="mt-[30px] max-w-[203px] text-center font-poppins text-[13px] font-normal text-black/80">
        Let’s help to meet up your tasks.
      </Text>
      <View className="mt-auto flex w-full flex-col gap-4">
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <View className="relative w-full">
                <CustomInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="Name Surname"
                  autoCapitalize="words"
                  className={cn(errors.fullName && "border border-red-500")}
                />
                {errors.fullName && (
                  <Text className="absolute right-4 top-[50%] -translate-y-1/2  text-red-500">
                    {errors.fullName.message}
                  </Text>
                )}
              </View>
            );
          }}
        ></Controller>
        <Controller
          control={control}
          name="eMail"
          render={({ field }) => {
            return (
              <View className="relative w-full">
                <CustomInput
                  placeholder="Please Enter Your Email Adress..."
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className={cn(errors.eMail && "border border-red-500")}
                />
                {errors.eMail && (
                  <Text className="absolute right-4 top-[50%] -translate-y-1/2  text-red-500">
                    {errors.eMail.message}
                  </Text>
                )}
              </View>
            );
          }}
        ></Controller>
        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            return (
              <View className="relative w-full">
                <CustomInput
                  secureTextEntry
                  placeholder="Please Enter Your Password"
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  className={cn(errors.password && "border border-red-500")}
                />
                {errors.password && (
                  <Text className="absolute right-4 top-[50%] -translate-y-1/2  text-red-500">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            );
          }}
        ></Controller>
        <Controller
          control={control}
          name="rePassword"
          render={({ field }) => {
            return (
              <View className="relative w-full">
                <CustomInput
                  secureTextEntry
                  placeholder="Please Enter Your Password Again"
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  className={cn(errors.rePassword && "border border-red-500")}
                />
                {errors.rePassword && (
                  <Text className="absolute right-4 top-[50%] -translate-y-1/2  text-red-500">
                    {errors.rePassword.message}
                  </Text>
                )}
              </View>
            );
          }}
        ></Controller>
      </View>
      <View className="mt-auto flex w-full">
        <CustomButton
          title="Register"
          disabled={isSubmitting}
          onPress={async () => await handleSubmit(onSubmit)()}
        />
        <View className="mt-4 flex w-full flex-row items-center justify-center text-center">
          <Text className="font-poppins text-[16px] font-normal text-black">
            Already have an account ?
          </Text>
          <TouchableOpacity
            className="ml-2"
            onPress={() => router.push("/login")}
          >
            <Text className="font-poppins text-[16px] font-normal text-primary">
              {" "}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TopWrapper>
  );
}
