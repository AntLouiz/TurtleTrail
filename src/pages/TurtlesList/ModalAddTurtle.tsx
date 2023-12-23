import React from 'react'

import { Text, View, StyleSheet } from "react-native"

import Modal from '../../components/Modal'


type Props = {
  visible: boolean;
  onClose: () => void;
};

export const ModalAddTurtle = (props: Props) => {
  return (
    <Modal title="Add a turtle" visible={props.visible} onClose={props.onClose}>
      <View>
        <Text>Form here</Text>
      </View>
      <Modal.Footer>
        <Modal.CancelButton title="Cancel" onPress={props.onClose} />
        <Modal.ConfirmButton title="Create" onPress={() => {}} />
      </Modal.Footer>
    </Modal>
  );
};

const styles = StyleSheet.create({
});
