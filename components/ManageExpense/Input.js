import { TextInput, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ style, textInputConfig, label }) {
  let inputStyles = [
    styles.input,
    textInputConfig?.multiline && styles.inputMultiLine,
  ];

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiLine: {
    minHeight: 140,
    textAlignVertical: "top",
  },
});
