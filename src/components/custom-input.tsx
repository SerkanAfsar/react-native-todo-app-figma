import { cn } from "@/utils";
import { TextInput, TextInputProps } from "react-native";

type CustomInputProps = {} & TextInputProps;
export default function CustomInput({
  placeholder,
  className,
  ...rest
}: CustomInputProps) {
  return (
    <TextInput
      className={cn(
        "flex  w-full items-center rounded-[50px] bg-white px-4 py-5 font-poppins text-[13px] font-normal text-black/90 ",
        className && className,
      )}
      placeholder={placeholder}
      {...rest}
    />
  );
}
