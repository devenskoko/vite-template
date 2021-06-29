<template>
  <div class="w-full h-full pl-5 pr-5 flex items-center justify-between bg-white font-bold box-border">
    <div class="text-xl cursor-pointer" @click="router.push('/')">Vite2.x + Vue3.x + TypeScript + tailwindcss</div>
    <div class="cursor-pointer text-base" @click="goGitHub"><i class="icon el-icon-s-promotion text-xl"></i> GitHub</div>
  </div>
</template>

<script lang="ts" setup type="javascript">
import { useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const router = useRouter()

// eslint-disable-next-line no-unused-vars
const goGitHub = () => {
  window.open('https://github.com/XPoet/vite-vue3-starter')
}
</script>

<style scoped lang="scss"></style>
