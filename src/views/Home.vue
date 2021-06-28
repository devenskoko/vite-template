<template>
  <div class="w-full h-full box-border text-center">
    <img class="w-1/2 inline-block" alt="Vue logo" src="../assets/logo.png" />
    <div class="font-bold text-3xl p-5">Vite2.x + Vue3.x + TypeScript + Element Plus</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped lang="scss">
.home-container {
  .vue-element-plus-logo {
    width: 50%;
  }
}
</style>
