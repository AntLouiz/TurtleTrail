import React, { useState } from 'react'

import { View, StyleSheet, Text } from 'react-native'
import { useForm, FormProvider, FieldValues, useFormContext, useController } from 'react-hook-form'
import Geolocation from '@react-native-community/geolocation'

import { TextField } from '../../../../components/TextField'
import Modal from '../../../../components/Modal'
import { Button } from '../../../../components/Button'
import { SPACING } from '../../../../tokens/spacing'

import { Turtle, Location } from '../../../../types'

type Props = {
    defaultValues: Turtle | null
    onSubmit: (data: Turtle) => void
    onCancel: () => void
}

export const FormTurtle = (props: Props) => {
    const methods = useForm({ defaultValues: props.defaultValues || {} })
    const { handleSubmit, watch } = methods

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

const CurrentPositionField = (props: { name: string }) => {
    const [isGettingLocation, setIsGettingLocation] = useState(false)
    const { control } = useFormContext()
    const { field } = useController({ control, name: props.name })

    const location: Location | undefined = field.value
    const buttonText = isGettingLocation ? 'Getting location...' : 'Get actual location'
    const valueText = location ?
        `Lat: ${location?.latitude}, Long: ${location?.longitude}`:
        'No location assigned'

    const disable = () => setIsGettingLocation(true)
    const enable = () => setIsGettingLocation(false)

    return (
        <>
            <Text>
                {valueText}
            </Text>
            <Button
                type='outline'
                title={buttonText}
                disabled={isGettingLocation}
                onPress={() => {
                    disable()
                    Geolocation.getCurrentPosition(info => {
                        const { latitude, longitude } = info.coords
                        field.onChange({ latitude, longitude })
                        enable()
                    })
                }}
            />
        </>
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