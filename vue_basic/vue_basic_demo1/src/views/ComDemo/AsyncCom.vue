<template>
    <div>
        msg: {{msg}}
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent<any>({
    setup() {
        const msg= ref('aaa')

        return {msg}
    }
})
</script>

<style scoped>

</style>