<template>
  <main class="main-container w-full h-full box-border flex flex-column flex-jc-between">
    <div class="relative box-border w-full mb-3 h-60">
      <Header />
    </div>
    <div class="relative box-border w-full flex flex-1 justify-between">
      <div class="relative h-full w-80 box-border">
        <Nav />
      </div>

      <div class="relative w-full h-full box-border pb-2 pl-2 pr-2">
        <div class="relative w-full h-full rounded-md box-border p-3 bg-white">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup type="javascript">
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import { defineProps, useContext, inject } from 'vue'
import { useVModels } from '@vueuse/core'
import { injectionKeyUser } from '@/common/types/context'
const props = defineProps({
  value: String
})
const ctx = useContext()
const emit = ctx.emit
const { value } = useVModels(props, emit)

const user = inject(injectionKeyUser)
console.log(user)
</script>

<style lang="scss">
.main-container {
  background: #f1f1f1;
}
</style>
