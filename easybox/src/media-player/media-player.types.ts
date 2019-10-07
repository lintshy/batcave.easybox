

export type MediaPlayerProps = {
    url: string
    icon?: string

}

export type MediaPlayerState = {
    isLoading: boolean
    isEmptySource?: boolean
    isPaused?: boolean
}