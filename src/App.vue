<template>
  <Main v-model:value="value"></Main>
</template>

<script lang="ts" setup>
import Main from '@/components/Main.vue'
import { ref, provide } from 'vue'
import { injectionKeyUser } from '@/common/types/context'
const value = ref('useVModel')

provide(injectionKeyUser, {
  id: 1,
  name: 'Li'
})
</script>

<style lang="scss">
</style>
