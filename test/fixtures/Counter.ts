import { Component, Lifecycle, p, Prop } from 'av-ts'
import { Vue } from "vue/types/vue"

@Component({
    name: 'Test',
    template: `<div>
  <span >{{ count }}</span>
  <button @click="increment">Increment</button>
</div>`
})
export default class Counter extends Vue {
    count = 0

    @Prop initial = p({
        type: Number,
        default: 0
    })

    @Lifecycle
    created() {
        this.count = this.initial
        // let self = this
        // this.$watchAll(['initial', 'count'], function (name: string, val: any) {
        //     self.$emit(name, val)
        // })
    }

    inc() {
        this.count++
    }
}
