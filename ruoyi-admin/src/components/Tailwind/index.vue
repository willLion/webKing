<template>
    <div>
Tailwind app
    <div class="flex items-center">aaa</div>
    </div>
</template>

<script setup lang="ts">


    onMounted(()=>{
        let arr = [1,2,3,4,5,6]
        
        arr.forEach(item => {
            console.log('item', item);
        })
    })
</script>

<style scoped>

</style>