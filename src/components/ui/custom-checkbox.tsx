import { Checkbox, CheckboxProps } from "expo-checkbox";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type CustomCheckBoxProps = Omit<CheckboxProps, "value" | "onValueChange"> & {
  title: string;
  value: boolean;
  onCheckChanged: (value: boolean) => void;
};

export default function CustomCheckBox({
  title,
  onCheckChanged,
  value,
  ...rest
}: CustomCheckBoxProps) {
  const [checked, setIsChecked] = useState<boolean>(value);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsChecked(value);
  }, []);

  useEffect(() => {
    onCheckChanged(checked);
  }, [checked, onCheckChanged]);

  return (
    <View className="flex w-full flex-row items-center justify-start gap-4">
      <Checkbox
        {...rest}
        value={checked}
        onValueChange={setIsChecked}
        color={value ? "#50C2C9" : undefined}
      />
      <Text onPress={() => setIsChecked(!checked)}>{title}</Text>
    </View>
  );
}
