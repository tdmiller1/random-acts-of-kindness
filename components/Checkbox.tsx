import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

enum CheckboxType { "default" }

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: CheckboxType.default
}

export function Checkbox(props: CheckboxProps) {
  const { type = CheckboxType.default } = props;
  const typedStyles = styles[type];
  return <input style={typedStyles} {...props} type="checkbox" />;
}

const styles = StyleSheet.create({
  [CheckboxType.default]: {
    fontSize: 16,
    lineHeight: 24,
  },
});
