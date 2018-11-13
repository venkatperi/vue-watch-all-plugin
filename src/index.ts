/// <reference types="@venkatperi/vue-shims"/>

import { VueConstructor } from "vue"
import VueWatchAllPlugin, { WatchAllCallback } from './VueWatchAll'

// noinspection JSUnusedGlobalSymbols
export default VueWatchAllPlugin

declare global {
    // noinspection JSUnusedGlobalSymbols
    interface Window {
        Vue: VueConstructor
    }

    // noinspection JSUnusedGlobalSymbols
    interface Vue {
        $watchAll(props: string[], callback: WatchAllCallback): void
    }
}

if (window && window.Vue) {
    window.Vue.use(VueWatchAllPlugin)
}


