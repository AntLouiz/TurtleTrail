import React from 'react'

import { Pressable, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../tokens/colors'
import { SIZES } from '../../tokens/sizes'
import { SPACING } from '../../tokens/spacing'

export interface ButtonDefault {
    type: 'outline' | 'rounded'
    title: string
    disabled?: boolean
    onPress: () => void
}

export function Button(props: ButtonDefault) {
    const { onPress, title, type } = props

    const choosedStyle = variations[type]

    let buttonStyles = {
        ...defaultStyles.button,
        ...choosedStyle.button
    }
    if (props.disabled) {
        buttonStyles = {...buttonStyles, ...defaultStyles.disabled}
    }
    const textStyles = {...defaultStyles.text, ...choosedStyle.text}
    return (
        <Pressable style={buttonStyles} disabled={props.disabled} onPress={onPress}>
            <Text style={textStyles}>{title}</Text>
        </Pressable>
    )
}

const defaultStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SPACING[3],
        paddingHorizontal: SPACING[4],
        borderRadius: SPACING[1],
        elevation: SPACING[1],
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        borderWidth: SPACING.px
    },
    disabled: {
        opacity: 0.3
    },
    text: {
        fontSize: SIZES.medium,
        lineHeight: SPACING[5],
        fontWeight: 'bold',
        letterSpacing: 0.25
    }
})

const roundedStyles = StyleSheet.create({
    button: {
        borderRadius: 100,
        color: COLORS.text
    },
    text: {
        color: COLORS.text
    }
})

const outlineStyles = StyleSheet.create({
    button: {
        borderRadius: 100,
        backgroundColor: COLORS.transparent,
        color: COLORS.primary
    },
    text: {
        color: COLORS.primary
    }
})

const variations = { outline: outlineStyles, rounded: roundedStyles }
