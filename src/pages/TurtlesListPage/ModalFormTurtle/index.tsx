import React from 'react'

import { StyleSheet } from "react-native"

import Modal from '../../../components/Modal'
import { FormTurtle } from './FormTurtle'

import { Turtle } from '../../../types'


type Props = {
    defaultValues: Turtle | null
    visible: boolean
    onSubmit: (data: Turtle) => void
    onClose: () => void
}

export const ModalFormTurtle = (props: Props) => {
    const title = props.defaultValues ? `Edit` : 'Add'
    return (
        <Modal title={`${title} a turtle`} visible={props.visible} onClose={props.onClose}>
            <FormTurtle defaultValues={props.defaultValues} onSubmit={props.onSubmit} onCancel={props.onClose}/>
        </Modal>
    )
}

const styles = StyleSheet.create({})
