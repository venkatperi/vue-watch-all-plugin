import { createLocalVue } from "@vue/test-utils"
import { expect } from 'chai'
import { before, describe, it } from 'mocha'
import VueWatchAllPlugin from '../src'

let localVue
let vm

describe('watch all plugin', () => {
    before(() => {
        localVue = createLocalVue()
        localVue.use(VueWatchAllPlugin)
        vm =new  localVue()
    })

    it('installs $watchAll as an instance method', () => {
        expect(localVue.prototype.$watchAll).to.not.be.undefined
        expect(vm.$watchAll).to.not.be.undefined
    })

})
