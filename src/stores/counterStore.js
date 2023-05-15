import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id: 'counter', //sama halnya dengan defineStore('counter', { code... }) u/ first paramater dari defineStore()
    state: () => ({
        count: 0
    }),
    getters: {
        getCount: (state) => state.count,
        doubleCount: (state) => state?.count * 2,
        dividedBy: (state) => (divided) => state?.count / divided // getter dg parameter bair lbih dinamis
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        incrementBy(number) {
            this.count += number
        }
    }
})