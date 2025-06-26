import { defineStore } from 'pinia'
export const useMain = defineStore('main', {
    state: () => {
        return {
          counter: 0,
          name: 'Eduardo',
        }
    },
    getters: {
        doubleCount: (state) => {
            return state.counter * 2
        },
    },
    actions: {
        increment() {
          this.counter++
        },
        randomizeCounter() {
            setTimeout(() => {
                this.counter = Math.round(100 * Math.random())
            }, 0);
        },
        async fnName(){
        }
    },
})