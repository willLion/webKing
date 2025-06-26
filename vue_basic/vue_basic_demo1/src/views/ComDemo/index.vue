<template>
    <div>
        <MyBook :title="title" @enlarge="enlarge" >
            <template #default="scope">
                scope:{{scope}}
            </template>
            <template #header="{obj, count}">
                scope:{{obj}}-{{count}}
            </template>
        </MyBook>

        <keep-alive>
            <component :is="MyBookCa">

            </component>
        </keep-alive>

        <TestCom />
        <TestCom :title="title"
                 user-id="11"
                  v-bind="testObj"
                />
        <TestCom
                 v-bind="{
                        ...testObj,
                        title: title,
                        userId: '22'
                 }"
                 @testEmit="testEmit"
                 v-model="textVal"
        />
        <div>parent textVal: {{textVal}}</div>
        <div>parent title: {{title}}</div>

        <TestCom
            v-bind="{
                        ...testObj,
                        title: title,
                        userId: '22'
                 }"
            @testEmit="testEmit"
            v-model:textVal1="textVal"
        />


        <AsyncCom/>
        <UseCommand/>
    </div>
</template>

<script setup lang="ts">
    import MyBook from "./myBook.vue";
    import {ref} from "vue";
    import AsyncCom from "./AsyncCom.vue";
    import UseCommand from "./UseCommand.vue";

    const title = ref('dsadfdf')
    const MyBookCa = ref(MyBook)
    const testObj = ref({
        name: 'das',
        age:12
    })

    const textVal = ref('')

    const enlarge = () => {
        console.log('enlarge emit')
    }

    const testEmit = (param) => {
        console.log('testEmit emit', param)
    }
</script>

<style scoped>

</style>