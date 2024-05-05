import React from 'react'

import { View, Text, TextInput, StyleSheet, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'

import { COLORS } from '../../tokens/colors'
import { useController, useFormContext } from 'react-hook-form'
import { SPACING } from '../../tokens/spacing'

type Props = {
    label: string
    name: string
    required?: boolean | string
    onBlur?: () => void
    onChange?: (value: string) => void
}

export const TextField = (props: Props) => {
    const { name, label, required = false, onChange, onBlur } = props

    const { control } = useFormContext()
    const { field, fieldState } = useController({ control, defaultValue: '', name, rules: { required } })

        return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                ref={field.ref}
                value={field.value}
                onBlur={() => {
                    field.onBlur()
                    onBlur && onBlur()
                }}
                onChangeText={value => {
                    field.onChange(value)
                    onChange && onChange(value)
                }}
                style={styles.input}
            />
            {fieldState.error ? <Text style={styles.error}>{fieldState.error.message}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: SPACING[2],
        backgroundColor: COLORS.input
    },
    container: {
        flex: 1,
        gap: SPACING[2]
    },
    label: {
        color: COLORS.primary,
        fontWeight: '600',
        padding: SPACING[2]
    },
    error: {
        color: COLORS.error
    }
})
