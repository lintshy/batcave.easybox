import * as _ from 'lodash'

import { channel } from "./iptv.types"

const apiUrl = require('../../config')

type iptvResults = {
    data: channels
}
type channels = {
    channels: channel[]
}

export const getIptvUrls = async (params: string[]): Promise<any> => {
    const query = `${apiUrl.iptvContainer}?query={channels{${params}}}`

    return await fetch(query, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

    }).then(results =>
        results.json()).then((results) => {
            const channels: channel[] = _.get(results, 'data.channels', [])
            return channels
        }
        ).catch(error => {
            throw new error(error)
        })
}