<script setup lang="ts">

import {onMounted, getCurrentInstance} from "vue";

const app = getCurrentInstance()

onMounted(()=>{
    console.log('my com mounted', app?.proxy?.$attrs)
    console.log('my com mounted', app?.proxy?.$options)
})
</script>

<template>
<div class="footer header">
    <div  class="heaer" :class="$attrs.class">3</div>
    <div class="maion">2</div>
    <div class="aaa">11</div>
    my com
</div>
</template>

<style scoped>

</style>