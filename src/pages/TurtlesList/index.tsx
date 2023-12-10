import React, { type ReactNode } from 'react'

import { StyleSheet, View, Text } from 'react-native'

export const TurtlesList = () => {
    return (
        <View style={styles.container}>
        <Text>TurtlesList</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
