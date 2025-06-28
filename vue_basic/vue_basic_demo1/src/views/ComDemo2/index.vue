<script setup lang="ts">
  import {ref} from "vue";
  import MyModal from '../../components/MyModal.vue'

  const show = ref(false)
  const open = ref(false)

</script>

<template>
  <div>
      <button @click="show = !show">toggle show</button>
      <br>
      <transition>
          <p v-if="show">hello</p>
      </transition>

      <transition name="fade">
          <p v-if="show">hello1</p>
      </transition>

      <Transition name="slide-fade">
          <p v-if="show">hello</p>
      </Transition>


      <Transition name="bounce">
          <p v-if="show" style="text-align: center;">
              Hello here is some bouncy text!
          </p>
      </Transition>


      <button @click="open = true">Open Modal</button>
      <br>

      <Teleport to="body">
          <div v-if="open" class="modal">
              <p>Hello from the modal!</p>
              <button @click="open = false">Close</button>
          </div>
      </Teleport>
  </div>
</template>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}

</style>