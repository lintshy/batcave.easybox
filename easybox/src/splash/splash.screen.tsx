import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import { getIptvUrls } from '../iptv/iptv.api'


export const SplashScreen: React.SFC<{
    navigation: NavigationScreenProp<any, any>
}> = props => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')
    useEffect(() => {
        const params = ['tvgId', 'tvgName',
            'tvgLogo',
            'groupTitle',
            'url']

        getIptvUrls(params).then(
            results => {
                setLoading(false)
                const { navigation } = props
                navigation.navigate('Home', {
                    'channels': results
                })
            }
        ).catch(error => {
            setLoading(false)
            setError(true)
            setErrorText(JSON.stringify(error))
        })
    })
    return (
        <View>
            {loading && <ActivityIndicator />}
            {error && <Text>{errorText}</Text>}
        </View>
    )
}
