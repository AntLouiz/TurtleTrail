import React, { useState } from 'react'

import { SafeAreaView, StatusBar, VirtualizedList, StyleSheet, Dimensions, Image, Text, Pressable } from 'react-native'

import { Turtle } from '../../../types'
import { SPACING } from '../../../tokens/spacing'
import { COLORS } from '../../../tokens/colors'

const turtleImage = require('../../../../assets/defaulturtle.jpeg')

type Props = {
    turtles: Turtle[]
    onPress: (turtle: Turtle) => void,
    onEndReached: () => void
}

const getItem = (data: Turtle[], index: number): Turtle => data[index]

export function TurtlesList(props: Props) {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <VirtualizedList
                    data={props.turtles}
                    initialNumToRender={5}
                    renderItem={({ item }) => {
                        return <TurtleItem turtle={item} onPress={() => props.onPress(item)} />
                    }}
                    keyExtractor={item => item.code}
                    getItemCount={() => props.turtles.length}
                    getItem={getItem}
                    onEndReached={() => props.onEndReached()}
                />
            </SafeAreaView>
        </>
    )
}


function TurtleItem(props: { turtle: Turtle, onPress: () => void }) {
    return (
        <Pressable style={styles.item} onPress={props.onPress}>
            <Image source={turtleImage} style={styles.image} />
            <Text>{props.turtle.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        width: Dimensions.get('window').width
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'stretch'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        gap: SPACING[4],
        backgroundColor: COLORS.background,
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20
    }
})
