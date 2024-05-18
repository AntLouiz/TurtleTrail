import React from 'react'

import { View, StyleSheet } from 'react-native'
import { useForm, FormProvider, FieldValues } from 'react-hook-form'

import { TextField } from '../../../../components/TextField'
import Modal from '../../../../components/Modal'
import { CurrentPositionField } from './GetCurrentPositionField'
import { SPACING } from '../../../../tokens/spacing'

import { Turtle } from '../../../../types'

type Props = {
    defaultValues: Turtle | null
    onSubmit: (data: Turtle) => void
    onCancel: () => void
}

export const FormTurtle = (props: Props) => {
    const methods = useForm({ defaultValues: props.defaultValues || {} })
    const { handleSubmit } = methods

    const onSubmit = (data: FieldValues) => {
        const { name, code, weight, location } = data
        props.onSubmit({ name, code, weight, location })
    }

    return (
        <FormProvider {...methods}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextField label="Code:" name='code' required="This field is required" />
                    <TextField label="Weight:" name='weight' required="This field is required" />
                    <TextField label="Name:" name='name' />
                    <CurrentPositionField name='location' />
                </View>
                <Modal.Footer>
                    <Modal.CancelButton title="Cancel" onPress={props.onCancel} />
                    <Modal.ConfirmButton title="Submit" onPress={handleSubmit(onSubmit)} />
                </Modal.Footer>
            </View>
        </FormProvider>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        gap: SPACING[3],
        width: 250
    },
    container: {
        height: '100%',
        alignItems: "center"
    }
})