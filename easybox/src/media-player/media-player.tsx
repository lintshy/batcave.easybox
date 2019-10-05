import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import GoogleCast, { CastButton } from 'react-native-google-cast'

export class MediaPlayer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        GoogleCast.castMedia({
            mediaUrl:
                'https://acv.asianetmobiletvplus.com/webstreams/8f8e72769cb3e3a6e27c220e1e3887b8.smil/playlist.m3u8',



        })
    }

    render() {
        return <View style={styles.container}>
            <Video source={{ uri: `https://acv.asianetmobiletvplus.com/webstreams/8f8e72769cb3e3a6e27c220e1e3887b8.smil/playlist.m3u8` }}
                onBuffer={this.onBuffer}
                onError={this.onError}
                style={styles.mediaPlayer}
            />
            <CastButton style={{ width: 24, height: 24 }} />

        </View>
    }
    onBuffer = () => {
        console.log('buffering')
    }
    onError = () => {
        console.log(`error`)
    }

}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            width: '100%',
            height: '100%'
        },
        mediaPlayer: {
            flex: 1,
            width: '100%',
            height: '100%'

        }
    }
)