import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons'
import { Pressable, StyleSheet, View, Text } from 'react-native'

import { ModalFormAddTurtle } from './ModalFormAddTurtle'
import { SPACING } from '../../tokens/spacing'

export const TurtlesList = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    return (
        <>
            <ModalFormAddTurtle
                visible={showModal}
                onSubmit={() => setShowModal(false)}
                onClose={() => setShowModal(false)}
            />
            <View style={styles.container}>
                <Text>TurtlesList</Text>
            </View>
            <Pressable onPress={() => setShowModal(true)}>
                <Text style={styles.button}>
                    <AntDesign name="plus" size={30} />
                </Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 100,
        position: 'absolute',
        bottom: SPACING[5],
        right: SPACING[5],
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: SPACING[5]
    }
})
