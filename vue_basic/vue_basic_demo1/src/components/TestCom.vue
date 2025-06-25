<script setup lang="ts">
  import {defineProps} from 'vue'

  const props = defineProps({
      title: {
          type: String,
          default: 'hello'
      },
      userId: {
          type: String,
          default: 0,
      },
      name: {},
      age: {}
  })

  // const emit = defineEmits(['testEmit'])
  const emit = defineEmits({
      testEmit: ({name, age})=>{
          if(name && age) {
              console.log('filter')
              return true
          } else {
              console.warn('tip error')
              return false
          }
      }
  })

  const textVal = defineModel()
  const model = defineModel('textVal1')
</script>

<template>
<div>
    test com
    <div>title: {{props.title}}</div>
    <div>userId: {{props.userId}}</div>
    <div>name: {{props.name}}</div>
    <div>age: {{props.age}}</div>
    <div @click="emit('testEmit', {name: 'a', age:12})">testEmit emit</div>
<!--    <div @click="emit('testEmit', {name: 'a'})">testEmit emit1</div>-->
    textVal: <input type="text" v-model="textVal">
    title: <input type="text" v-model="props.title">
    <div>model: {{model}}</div>
    <br>
</div>
</template>

<style scoped>

</style>