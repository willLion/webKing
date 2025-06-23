<script setup lang="ts">

import {computed, ref} from "vue";

const msg = ref('hello world')
const msgHtml = ref('<h3/>aaaaaaaaa</h3>')
const vIndex = ref(1)
const myClass = {
    fontSize: 30 + 'px',
    color: 'red',
    backgroundColor: 'pink'
}
const isDis = ref(false)
const toTitle = () => {
    return 'aaaaaaa'
}
const attrName = 'id'
const eventName = 'click'
const doSome = () => {
    console.log('doSome emit')
}

const someAttr = computed(()=>{
    return 'someattr' + 'demo1'
})
const count = ref(0)
</script>

<template>
    <div>
        <div>
            {{ msg }}
        </div>
        <div v-html="msgHtml"></div>
        <div v-bind:id="1"
             :index="2"
             :vIndex
        > v bind
        </div>
        <div :myClass
             v-bind="myClass"
        >111
        </div>
        <button :disabled="isDis">emit</button>
        <div>{{ true ? 'yes' : 'no' }}</div>
        <div>
            {{ msg.split('').reverse().join('') }}
        </div>
        <div :id="`list-${msg}`">1</div>
        <div :title="toTitle()">title</div>
        <div :[attrName]="11">attr id</div>
        <butotn @[eventName]="doSome">doSome</butotn>
        <button :[someAttr]="msg">some attr</button>
    </div>
</template>

<style scoped>

</style>