<template>
  <div class="w-full h-full box-border text-center">
    <div class="font-bold text-3xl p-5">Unit Test Page</div>
    <p class="mb-3 mt-3">count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
}
</style>
