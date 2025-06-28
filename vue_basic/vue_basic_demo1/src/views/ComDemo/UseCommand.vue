<template>
    <div>
        <div v-height-light class="container">aaaaa</div>
        <div class="container" v-height>aaa11aa</div>
        <br>
        <h1>{{translate('greetings.hello') }}</h1>
        <h1>{{$translate('greetings.hello') }}</h1>
    </div>
</template>

<script setup lang="ts">
import {getCurrentInstance, inject} from "vue";

    const vHeightLight = {
        mounted: (el)=> {
            el.classList.add('active')
        }
    }

    const app = getCurrentInstance()
    const translate = inject('translate')
    console.log('app', app?.proxy?.$translate('greetings.hello'))
console.log('translate', translate('gege.hello'), translate)
</script>

<style scoped>
.container {
    width: 200px;
    height: 200px;
}

.active {
    background-color: pink;
}
</style>