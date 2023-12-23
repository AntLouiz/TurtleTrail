import React, { useState } from "react"

import { AntDesign } from "@expo/vector-icons"
import { Pressable, StyleSheet, View, Text } from "react-native"

import { ModalAddTurtle } from "./ModalAddTurtle"

export const TurtlesList = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <>
      <ModalAddTurtle visible={showModal} onClose={() => setShowModal(false)} />
      <View style={styles.container}>
        <Text>TurtlesList</Text>
      </View>
      <Pressable
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.button}>
          <AntDesign name="plus" size={30} />
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 100,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
  },
});
