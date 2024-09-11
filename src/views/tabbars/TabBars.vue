<template>
  <div ref="tabbar-page" class="tabbar-page">
    <h1 class="page-title">Tab Bar</h1>
    <div class="container-variant">
      <div
        class="container-variant__block"
        @click="$router.push('/tabbars/1')"
      >
        <TabBar1 scale="0.4" />
      </div>
      <div
        class="container-variant__block"
        @click="$router.push('/tabbars/2')"
      >
        <TabBar2 />
      </div>
      <div
        class="container-variant__block"
        style="display:flex;justify-content:center;align-items:center;"
        @click="$router.push('/tabbars/3')"
      >
        <TabBar3 scale="0.4" />
      </div>
    </div>
  </div>
</template>

<script>
import TabBar1 from '../../components/TabBar/1/TabBar_1.vue'
import TabBar2 from '../../components/TabBar/2/TabBar_2.vue'
import TabBar3 from '../../components/TabBar/3/TabBar_3.vue'

export default {
  data: () => ({
  }),
  components: {
    TabBar1,
    TabBar2,
    TabBar3,
  }
}
</script>

<style lang="scss">
.tabbar-page {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>