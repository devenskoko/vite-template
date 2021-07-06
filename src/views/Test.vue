<template>
  <div class="w-full h-full box-border text-center">
    <div class="font-bold text-3xl p-5">Unit Test Page</div>
    <p class="mb-3 mt-3">count is: {{ count }}</p>
    <p>{{ text }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts" type="javascript" setup>
import { ref } from 'vue'
const count = ref<number>(0)
ref: text = '等待数据读取'
const increment = () => {
  count.value += 1
}
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
}
</style>
