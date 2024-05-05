import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons'
import { Pressable, StyleSheet, View, Text } from 'react-native'

import { Notification } from '../../components/Notification'
import { ModalFormTurtle } from './ModalFormTurtle'

import { SPACING } from '../../tokens/spacing'
import { SIZES } from '../../tokens/sizes'
import { COLORS } from '../../tokens/colors'
import { TurtlesList } from './TurtlesList'
import { Turtle } from '../../types'

export const TurtlesListPage = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [notificationMessage, setNotificationMessage] = useState<string>('')
    const [selectedTurtle, setSelectedTurtle] = useState<Turtle | null>(null)

    const showModalForm = (turtle: Turtle | null = null) => {
        setShowModal(true)
        setSelectedTurtle(turtle)
    }

    const hideModalForm = () => {
        setShowModal(false)
        setSelectedTurtle(null)
    }

    const hideNotification = () => setNotificationMessage('')

    return (
        <>
            <Notification
                title={notificationMessage}
                visible={!!notificationMessage}
                timeout={5*1000}
                onClose={hideNotification}
                onTimeoutEnd={hideNotification}
            />
            <ModalFormTurtle
                defaultValues={selectedTurtle}
                visible={showModal}
                onSubmit={() => {
                    hideModalForm()
                    setNotificationMessage(`Turtle ${selectedTurtle ? 'edited' : 'added'} successful!`)
                }}
                onClose={hideModalForm}
            />
            <View style={styles.container}>
                <TurtlesList turtles={[]} onPress={turtle => showModalForm(turtle)} />
            </View>
            <Pressable onPress={() => showModalForm()}>
                <Text style={styles.button}>
                    <AntDesign name="plus" size={SIZES.extraLarge} />
                </Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.page,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 100,
        position: 'absolute',
        bottom: SPACING[5],
        right: SPACING[5],
        alignItems: 'center',
        backgroundColor: COLORS.input,
        padding: SPACING[5]
    }
})
