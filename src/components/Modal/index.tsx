import React, { ReactNode } from 'react'

import {
    Pressable,
    Text,
    Modal as NativeModal,
    View,
    StyleSheet
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { Button, ButtonDefault } from '../Button'

import { COLORS } from '../../tokens/colors'
import { SPACING } from '../../tokens/spacing'
import { SIZES } from '../../tokens/sizes'

type Props = {
    children: React.ReactNode
    title: string
    onClose: () => void
    visible: boolean
}

type ModalButton = Omit<ButtonDefault, 'type'>

type ModalCloseButton = Omit<ModalButton, 'title'>

const Modal = (props: Props) => {
    return (
        <NativeModal
            animationType="none"
            visible={props.visible}
            style={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{props.title}</Text>
                    <ButtonClose onPress={props.onClose} />
                </View>
                <View style={styles.contentContainer}>{props.children}</View>
            </View>
        </NativeModal>
    )
}

const ButtonClose = (props: ModalCloseButton) => (
    <Pressable onPress={props.onPress} style={styles.buttonClose}>
        <Text>
            <AntDesign name="close" size={SIZES.extraLarge} />
        </Text>
    </Pressable>
)

const ConfirmButton = (props: ModalButton) => {
    return <Button {...props} type="rounded" />
}

const CancelButton = (props: ModalButton) => {
    return <Button {...props} type="outline" />
}

const Footer = (props: { children: ReactNode }) => {
    return <View style={styles.footer}>{props.children}</View>
}

Modal.ConfirmButton = ConfirmButton
Modal.CancelButton = CancelButton
Modal.Footer = Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: COLORS.background
    },
    header: {
        flexDirection: 'row',
        padding: SPACING[5],
        justifyContent: 'space-between'
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: '400'
    },
    contentContainer: {
        backgroundColor: COLORS.background
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
})

export default Modal
