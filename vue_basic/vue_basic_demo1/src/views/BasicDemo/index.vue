<script setup lang="ts">

import { computed, nextTick, onMounted, onUpdated, reactive, ref, shallowRef } from "vue";
import MyCom from "./MyCom.vue";
import itemsList from './items.vue'

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

const someAttr = computed(() => {
    return 'someattr' + 'demo1'
})
const count = ref(0)

const testObj = ref([
    {
        name: 'demo1',
        id: 1
    },
    {
        name: 'will1',
        id: 2
    },
    {
        name: 'aaa',
        id: 3
    }
])

const shallowArray = shallowRef([])

interface Book {
    title: string,
    year?: number
}

const book: Book = reactive({
    title: 'aaaa'
})

const books = ref([
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
])

const publishedBooksMessage = computed(() => {
    return books.value.length > 0 ? 'yes' : 'no'
})

function calculateBooksMessage() {
    return books.value.length > 0 ? 'Yes' : 'No'
}


const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
    get() {
        return firstName.value + '-' + lastName.value
    },
    set(newVal) {
        [firstName.value, lastName.value] = newVal.split('-')
    }
})

fullName.value = 'adsa-dfgvfg'

const alwaysSmall = computed((preVal) => {
    console.log('preval', preVal)
    if (count.value <= 3) return count.value
    return preVal

})

const isActive = ref(true)
const hasError = ref(false)

const classObj = computed(() => {
    return {
        active: isActive.value,
        'text-danger': hasError.value,
        container: true
    }
})


const activeClass = ref('active')
const errorClass = ref('text-danger')

const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = ref({
    color: 'red',
    fontSize: '30px'
})

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const msgEmit = (param) => {
    console.log('msgEmit param', param)
}

onMounted(() => {
    shallowArray.value.push({
        name: 'ds',
        id: 1
    })
    console.log('shallowArray.value', shallowArray.value)
    shallowArray.value[0] = {
        name: 'aaa',
        id: 3
    }
})

const changeShallowArray = async () => {
    shallowArray.value[0] = {
        name: 'aaa1',
        id: 4
    }

    shallowArray.value = [
        {
            name: 'demo1',
            id: 1
        },
        {
            name: 'will1',
            id: 2
        },
        {
            name: 'aaa',
            id: 3
        }
    ]

    await nextTick()
    console.log('shallowArray', shallowArray.value)
}

const greet = (e) => {
    console.log('greet', e.target)
}

onUpdated(() => {
    console.log('updated emit')
})
</script>

<template>
    <div>
        <div>
            {{ msg }}
        </div>
        <div v-html="msgHtml"></div>
        <div v-bind:id="1" :index="2" :vIndex> v bind
        </div>
        <div :myClass v-bind="myClass">111
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
        <div>shallowArray: {{ shallowArray }}</div>
        <button @click="changeShallowArray">change shallowArray</button>
        <div>publishedBooksMessage: {{ publishedBooksMessage }}</div>
        <div>calculateBooksMessage: {{ calculateBooksMessage }}</div>
        <div>fullName:{{ fullName }}</div>
        <div>{{ firstName }}-{{ lastName }}</div>
        <div>count: {{ count }}-{{ alwaysSmall }}</div>
        <button @click="count++">count add</button>
        <div class="will" :class="{
            active: isActive,
            'text-danger': hasError
        }">class
        </div>
        <div :class="classObj">class1</div>
        <div :class="[activeClass, errorClass]">class arr</div>
        <MyCom class="container active" />
        <div style="width: 100px;
        height: 100px;
        background-color: pink" :style="{
            color: activeColor,
            fontsize: fontSize + 'px'
        }">style
        </div>

        <div :style="styleObject">aa</div>
        <template v-if="1">
            1111
        </template>

        <li v-for="(item, index) in items" :key="index">
            {{ item.message }} --- {{ index }}
        </li>

        <li v-for="item of items">{{ item }}</li>

        <itemsList v-for="(item, index) in items" @msgEmit="msgEmit" :message="item.message" :msgGroup="item"
            :key="index" />
        <button v-on:click="count++">{{ count }}</button>
        <button @click="count++">{{ count }}</button>
        <button @click="greet($event)">greet</button>
        <button @click="e => greet(e)">greet</button>
        <button @clicke.stop="greet">stop greet</button>
        <form @submit.prevent="greet"></form>
        <a @click.stop.prevent="greet">stop prevent greet</a>
        <button @click.self="greet">seltf greet</button>
        <button @click.enter="e => greet(e)">greet</button>

    </div>
</template>

<style scoped>
.active {
    width: 200px;
    height: 200px;
    text-align: center;
    background-color: pink;
    color: white;
}

.text-danger {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 100px;
    height: 100px;
    background-color: white;
    color: black;
}
</style>