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
    </div>
</template>

<script setup lang="ts">
    import MyBook from "./myBook.vue";
    import {ref} from "vue";

    const title = ref('dsadfdf')
    const MyBookCa = ref(MyBook)

    const enlarge = () => {
        console.log('enlarge emit')
    }
</script>

<style scoped>

</style>