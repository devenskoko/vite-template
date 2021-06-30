<template>
  <div class="w-full h-full box-border text-center">
    <div class="font-bold text-3xl p-5">Axios Test Page</div>
    <div class="flex justify-center items-center">
      <div class="card-header flex justify-between items-center">
        <span>XPoet</span>
        <button class="button" @click="getUserInfo">点击获取XPoet信息</button>
      </div>
      <div class="info-list-box">
        <div class="text item" v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
        <div class="text item" v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
        <div class="text item" v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup type="javascript">
import { reactive, computed, toRefs } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const reactiveData = reactive({
  userInfo: computed(() => store.getters['axiosModule/userInfo'])
})

const getUserInfo = () => {
  store.dispatch('axiosModule/AXIOS_DATA')
}

const { userInfo } = { ...toRefs(reactiveData) }
</script>

<style scoped lang="scss">
.axios-container {
  .user-info-container {
    display: flex;
    justify-content: center;
    width: 100%;

    .info-list-box {
      padding: 10px;

      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .box-card {
      width: 480px;
    }
  }
}
</style>
