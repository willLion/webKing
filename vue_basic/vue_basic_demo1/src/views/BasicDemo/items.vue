<script setup lang="ts">
  const props = defineProps([
      'message',
      'msgGroup'
  ])

  const emits = defineEmits(['msgEmit'])


</script>

<template>
  <div>
      message: {{props.message}} <br>
      msgGroup: {{props.msgGroup}}
      <button
              @click="emits('msgEmit', props.msgGroup)">
          msgEmit emit</button>
  </div>
</template>

<style scoped>

</style>