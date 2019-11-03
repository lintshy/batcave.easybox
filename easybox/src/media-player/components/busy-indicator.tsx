import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'

const { height } = Dimensions.get('window');

export class BusyIndicator extends Component<{
    visible: boolean
}>{
    constructor(props) {
        super(props)
    }

    render() {
        const { visible } = this.props
        if (!visible) {
            return null
        }
        return <View style={styles.container}>
            <ActivityIndicator style={styles.indicator} />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    indicator: {
        marginTop: height / 2
    }
})