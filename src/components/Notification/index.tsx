import React, { useEffect } from 'react'

import { AntDesign } from '@expo/vector-icons'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import { SPACING } from '../../tokens/spacing'
import { SIZES } from '../../tokens/sizes'
import { COLORS } from '../../tokens/colors'

type Props = {
    title: string
    content?: string
    timeout?: number
    visible: boolean
    onTimeoutEnd: () => void
    onClose: () => void
}

export function Notification(props: Props) {
    if (!props.visible) return null

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onTimeoutEnd()
        }, props.timeout)

        return () => clearTimeout(timer)
    }, [])

    return (
        <View
            style={styles.container}
        >
            <View style={styles.content}>
                <Text>{props.title}</Text>
                {props.content ? <Text>{props.content}</Text> : null}
                <Pressable onPress={props.onClose}>
                    <Text>
                        <AntDesign name="close" size={SIZES.extraLarge} />
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: { 
        width: '100%', height: 100, position: 'absolute', zIndex: 1, flex: 1
    },
    content: {
        alignSelf: 'flex-end',
        padding: SPACING[5],
        margin: SPACING[5],
        flex: 1,
        flexDirection: "row",
        gap: SPACING[2],
        backgroundColor: COLORS.notification,
        alignItems: "center"
    }
})