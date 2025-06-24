<script setup lang="ts">
  const props = defineProps(['title'])
  console.log('props', props.title)

  const emits = defineEmits(['enlarge'])

  emits('enlarge')
</script>

<template>
  <div>
      a
      <br>
       header slot : <slot name="header" :obj="{
           name:'ds',
           age:12
       }" :count="0" />
      <br>
      slot : <slot :arr="[1,2,34,5]" />
  </div>
</template>

<style scoped>

</style>