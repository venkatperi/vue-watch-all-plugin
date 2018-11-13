import { VueConstructor } from "vue"
import VueWatchAllPlugin from './VueWatchAll'

// noinspection JSUnusedGlobalSymbols
export default VueWatchAllPlugin

declare global {
    // noinspection JSUnusedGlobalSymbols
    interface Window {
        Vue: VueConstructor
    }
}

if (window && window.Vue) {
    window.Vue.use(VueWatchAllPlugin)
}


