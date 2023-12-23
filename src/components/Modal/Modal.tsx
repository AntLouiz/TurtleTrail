import React from 'react'

import { Pressable, Text, Modal as NativeModal, View, StyleSheet } from 'react-native'

import { Button } from '../Button'

import { AntDesign } from "@expo/vector-icons"
import { COLORS } from '../../tokens/colors'
import { SPACING } from '../../tokens/spacing'
import { SIZES } from '../../tokens/sizes'

type Props = {
  children: React.ReactNode,
  title: string,
  onClose: () => void,
  visible: boolean;
}

const Modal = (props: Props) => {
  return (
    <NativeModal
      animationType="fade"
      visible={props.visible}
      style={styles.container}
    >
        <View
          style={styles.container}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
            <ButtonClose onPress={props.onClose} />
          </View>
          <View style={styles.contentContainer}>
            {props.children}
          </View>
        </View>
    </NativeModal>
  )
}

const ButtonClose = (props: { onPress: () => void }) => (
  <Pressable onPress={props.onPress} style={styles.buttonClose}>
    <Text>
      <AntDesign name="close" size={30} />
    </Text>
  </Pressable>
)

const ConfirmButton = (props) => {
  return <Button title={props.title} onPress={props.onPress} type="rounded"/>
}

const CancelButton = (props) => {
  return <Button title={props.title} onPress={props.onPress} type="outline"/>
}

const Footer = (props) => {
  return <View style={styles.footer}>{props.children}</View>
}

Modal.ConfirmButton = ConfirmButton
Modal.CancelButton = CancelButton
Modal.Footer = Footer

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: COLORS.background,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: SPACING[5],
    justifyContent: 'space-between',
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: '400'
  },
  contentContainer: {
    backgroundColor: COLORS.background,
  },
  buttonClose: {
    right: SPACING[3],
    top: SPACING[3]
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    padding: SPACING[6],
    gap: SPACING[7],
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default Modal
