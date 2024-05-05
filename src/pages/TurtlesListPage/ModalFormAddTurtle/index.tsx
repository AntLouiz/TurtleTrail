import React from 'react'

import { StyleSheet, Alert } from "react-native"

import Modal from '../../../components/Modal'
import { FormTurtle, FormTurtleData } from './FormTurtle'


type Props = {
    visible: boolean
    onSubmit: (data: FormTurtleData) => void
    onClose: () => void
}

export const ModalFormAddTurtle = (props: Props) => {
    return (
        <Modal title="Add a turtle" visible={props.visible} onClose={props.onClose}>
            <FormTurtle onSubmit={props.onSubmit} onCancel={props.onClose}/>
        </Modal>
    );
};

const styles = StyleSheet.create({})
