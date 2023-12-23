import React from 'react'

import { Pressable, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../tokens/colors';
import { SIZES } from '../../tokens/sizes';
import { SPACING } from '../../tokens/spacing';


export function Button(props) {
    const { onPress, title, type } = props;

    const choosedStyle = variations[type]

    const buttonStyles = StyleSheet.compose(defaultStyles.button, choosedStyle.button)
    const textStyles = StyleSheet.compose(defaultStyles.text, choosedStyle.text)
    return (
      <Pressable style={buttonStyles} onPress={onPress}>
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