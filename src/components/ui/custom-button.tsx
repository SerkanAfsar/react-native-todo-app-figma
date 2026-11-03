import { cn } from "@/utils";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type CustomButtonProps = {
  title: string;
  className?: string;
} & TouchableOpacityProps;
export default function CustomButton({
  title,
  className,
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={rest.onPress}
      className={cn(
        "flex w-full items-center justify-center rounded-md bg-primary p-4",
        className && className,
      )}
    >
      <Text className="font-poppins-semibold text-[16px] text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
