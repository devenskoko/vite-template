<template>
  <div class="w-full h-full bg-white font-bold box-border flex-jc-between flex-ai-center px-4 text-20 pointer">
    <div class="text-xl cursor-pointer" @click="router.push('/')">Vite2.x + Vue3.x + TypeScript</div>
    <div class="cursor-pointer text-base" @click="goGitHub">GitHub</div>
  </div>
</template>

<script lang="ts" setup type="javascript">
import { useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const router = useRouter()

// eslint-disable-next-line no-unused-vars
const goGitHub = () => {
  window.open('https://github.com/devenskoko/vite-template')
}
</script>

<style scoped lang="scss"></style>
