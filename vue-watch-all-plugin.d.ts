import { WatchAllCallback } from "./src/VueWatchAll"

declare module 'vue' {
    export interface Vue {
        $watchAll(props: string[], callback: WatchAllCallback): void
    }
}

