<template>
  <div class="w-full h-full box-border text-center">
    <div class="font-bold text-3xl p-5">Vuex Test Page</div>
    <p class="mb-3 mt-3">store doubleCount is: {{ count }}</p>
    <button @click="double">double</button>
  </div>
</template>

<script lang="ts" setup type="javascript">
import {reactive, computed, toRefs } from 'vue'
import {useStore } from 'vuex'

const store = useStore()

const reactiveData = reactive({
  count: computed(() => store.getters['numFactoryModule/count'])
})

const { count } = { ...toRefs(reactiveData) }

const double = () => {
  store.commit('numFactoryModule/DOUBLE_COUNT', Math.random())
}
</script>

<style scoped lang="scss"></style>
