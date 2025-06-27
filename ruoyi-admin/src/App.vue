<template>
  <div>
      <a-button @click="testMsg" type="primary">Primary Button</a-button>
  </div>
</template>

<script setup lang="ts"> 

  const $message: any = inject('$message')

  const testMsg = ()=>{
    console.log('testMsg');
    $message.info('aaaaaaaaaa')
  }
</script>

<style scoped>

</style>