//  Copyright 2018, Venkat Peri.
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the
//  "Software"), to deal in the Software without restriction, including
//  without limitation the rights to use, copy, modify, merge, publish,
//  distribute, sublicense, and/or sell copies of the Software, and to permit
//  persons to whom the Software is furnished to do so, subject to the
//  following conditions:
//
//  The above copyright notice and this permission notice shall be included
//  in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
//  NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
//  USE OR OTHER DEALINGS IN THE SOFTWARE.
import { PluginObject, VueConstructor, WatchOptions } from 'vue'

export type PropSpec = string | {
    name: string,
    options?: WatchOptions
}

export type PropList = Array<PropSpec>

export type WatchAllCallback = (name: string, n: any, o: any) => void

const plugin: PluginObject<any> = {
    install(Vue: VueConstructor) {

        /**
         *  `$watchAll()` is a instance convenience method to easily watch
         *  a list of properties. Internally, `$watchAll` registers a
         *  watcher for each property. When a property changes, the supplied
         *  callback `callback` is called with the property name and
         *  the current and previous values of the watched property.
         *
         * @param props - property names with optional options
         * @param callback -- invoked with a property changes
         */
        Vue.prototype.$watchAll =
            function (props: PropList, callback: WatchAllCallback) {
                for (const prop of props) {
                    const [name, opts] = typeof prop === 'string'
                                         ? [prop, undefined]
                                         : [prop.name, prop.options]

                    const cb = function (newValue: any, oldValue: any) {
                        callback(name, newValue, oldValue)
                    }

                    this.$watch(prop, cb, opts);
                }
            }
    }
}

export default plugin


