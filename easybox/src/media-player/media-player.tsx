import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, PixelRatio, ActivityIndicator } from 'react-native'
import Video from 'react-native-video'
import GoogleCast, { CastButton } from 'react-native-google-cast'
import Orientation from 'react-native-orientation-locker'
import { MediaPlayerProps, MediaPlayerState } from './media-player.types'
import { BusyIndicator } from './components/busy-indicator'

const { height, width } = Dimensions.get('window');
const statusBarSize = 27

export class MediaPlayer extends Component<MediaPlayerProps, MediaPlayerState>{
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
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
            <BusyIndicator visible={this.state.isLoading} />
            <Video source={{ uri: url }}
                onBuffer={this.onBuffer}
                onError={this.onError}
                style={styles.mediaPlayer}
                fullscreen={true}
                fullscreenOrientation={'landscape'}
                controls={true}
                resizeMode={"stretch"}
                onReadyForDisplay={this.onReadyForDisplay}
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
    onReadyForDisplay = () => {
        this.setState({
            isLoading: false
        })
        console.log('ready')
    }

}
const styles = StyleSheet.create(
    {
        container: {

            flex: 1,
            backgroundColor: '#000000',
            height: width,
            width: width,


        },
        mediaPlayer: {
            height: height - statusBarSize,
            alignSelf: "stretch",



        }
    }
)