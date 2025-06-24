<script setup lang="ts">
  import {ref} from "vue";

  const msg = ref('fasss')

  const myObj = ref({
      name: 'ds',
      age: 12,
      arr: [1,2,3,4],
      obj: {
          id: 1
      }
  })

  defineExpose({
      ...myObj.value
  })
</script>

<template>
  <div class="container-ref">aaa {{msg}}</div>
</template>

<style scoped>

</style>