<script setup lang="ts">

import {onMounted, ref, useTemplateRef, watch} from "vue";
import refCom from './refCom.vue'

const text = ref('')
const checked = ref(false)
const picked = ref(false)
const selected = ref('')

const selectedNew = ref('A')

const options = ref([
    {text: 'One', value: 'A'},
    {text: 'Two', value: 'B'},
    {text: 'Three', value: 'C'}
])

const toggle = ref('yes')
const checkedList = ref([])


const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(question, async (newVal, oldVal) => {
    if (newVal.includes('?')) {
        loading.value = true
        answer.value = 'thinking'
        try {
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer
        } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
        } finally {
            loading.value = false
        }
    }
})

const input = useTemplateRef('my-input')
const comref = useTemplateRef('comref')
const list = ref([1,2,3,4,5,6])
const itemRefs = useTemplateRef('itemRefs')

onMounted(()=>{
    console.log('ref input', input)
    console.log('comref', comref, comref.value, comref.value.age)
    input.value.focus()

    console.log('itemRefs', itemRefs)
})
</script>

<template>
    <div>
        <div>text: {{ text }}</div>
        <input type="text" :value="text" @input="e => text = e.target.value">
        <input type="text" v-model="text">
        <textarea v-model="text"></textarea>
        <input type="checkbox" id="checkBox" v-model="checked">
        <label for="checkBox">{{ checked }}</label> <br>

        <div>{{ checkedList }}</div>
        <input type="checkbox" id="checkBox1" value="1" v-model="checkedList">
        <label for="checkBox1">demo1</label>
        <input type="checkbox" id="checkBox2" value="2" v-model="checkedList">
        <label for="checkBox2">demo2</label>
        <input type="checkbox" id="checkBox3" value="3" v-model="checkedList">
        <label for="checkBox3">demo3</label> <br>

        <div>picked: {{ picked }}</div>
        <input type="radio" id="one" value="one" v-model="picked">
        <label for="one">demo1</label>

        <input type="radio" id="two" value="two" v-model="picked">
        <label for="two">demo2</label>

        <div>selected: {{ selected }}</div>
        <select v-model="selected">
            <option disabled value="">
                please select one
            </option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
        </select>

        <select v-model="selected" multiple>
            <option disabled value="">
                please select one
            </option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
        </select>


        <div>selectedNew: {{ selectedNew }}</div>
        <select v-model="selectedNew">
            <option v-for="item in options" :value="item.value">{{ item.text }}</option>
        </select>

        <div>toggle:　{{ toggle }}</div>
        <input
                type="checkbox"
                v-model="toggle"
                true-value="yes"
                false-value="no"/>
        <input
                type="checkbox"
                v-model="toggle"
                true-value="yes"
                false-value="no"/>
        <input
                type="checkbox"
                v-model="toggle"
                true-value="yes"
                false-value="no"/> <br>

        <p>
            Ask a yes/no question:
            <input v-model="question" :disabled="loading"/>
        </p>
        <p>{{ answer }}</p>

        <input type="text" ref="my-input">
        <refCom ref="comref" />
        <li v-for="item in list" ref="itemRefs">{{item}}</li>
    </div>
</template>

<style scoped>

</style>