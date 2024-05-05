import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../tokens/colors";
import { SPACING } from "../../tokens/spacing";

type Props = {
  placeholder: string;
};

export const SearchInput = (props: Props) => {
  const [search, setSearch] = useState<string>();

  return (
    <div style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        inlineImageLeft="search_icon"
        inputMode="search"
        placeholder={props.placeholder}
        onBlur={console.log}
        style={styles.input}
      />
      <Ionicons name="search" size={16} style={styles.searchIcon} />
    </div>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    top: SPACING[3],
    right: SPACING[3],
  },
  input: {
    padding: SPACING[3],
    borderRadius: SPACING[7],
  },
  container: {
    marginRight: SPACING[5],
    position: "absolute",
    flex: 1,
    borderRadius: SPACING[7],
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
