import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native'
import Video from 'react-native-video'
import GoogleCast, { CastButton } from 'react-native-google-cast'
import { MediaPlayerProps } from './media-player.types'
import Orientation from 'react-native-orientation-locker'

const { height, width } = Dimensions.get('window');
const statusBarSize = 27

export class MediaPlayer extends Component<MediaPlayerProps>{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(height, width)
        Orientation.lockToLandscape()
        const { url } = this.props
        GoogleCast.castMedia({
            mediaUrl: url
        })
    }

    render() {
        const { url } = this.props
        return <View style={styles.container}>
            <Video source={{ uri: url }}
                onBuffer={this.onBuffer}
                onError={this.onError}
                style={styles.mediaPlayer}
                fullscreen={true}
                fullscreenOrientation={'landscape'}
                controls={true}
                resizeMode={"stretch"}
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

            height: width,
            width: width,


        },
        mediaPlayer: {
            height: height - statusBarSize,
            alignSelf: "stretch",



        }
    }
)