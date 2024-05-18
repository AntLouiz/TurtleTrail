import React, { useState } from 'react'

import { Text } from 'react-native'

import Geolocation from '@react-native-community/geolocation'
import { useController, useFormContext } from 'react-hook-form'

import { Button } from '../../../../../components/Button'
import { Location } from '../../../../../types'

type Props = {
    name: string
}

export const CurrentPositionField = (props: Props) => {
    const [isGettingLocation, setIsGettingLocation] = useState(false)
    const { control } = useFormContext()
    const { field } = useController({ control, name: props.name })

    const location: Location | undefined = field.value
    const buttonText = isGettingLocation ? 'Getting location...' : 'Get actual location'
    const labelText = location ?
        `Lat: ${location?.latitude}, Long: ${location?.longitude}`:
        'No location assigned'

    const disable = () => setIsGettingLocation(true)
    const enable = () => setIsGettingLocation(false)

    return (
        <>
            <Text>{labelText}</Text>
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