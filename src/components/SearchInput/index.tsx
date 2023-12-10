import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import { StyleSheet, TextInput } from "react-native";

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
    top: 9,
    right: 10,
  },
  input: {
    padding: 10,
    width: 500,
    borderRadius: 28,
  },
  container: {
    marginRight: 20,
    position: "absolute",
    flex: 1,
    borderRadius: 28,
    backgroundColor: "#F3EDF7",
    alignItems: "center",
    justifyContent: "center",
  },
});
