<template>
  <div ref="effects-page" class="effects-page">
    <h1 class="page-title">Effects</h1>
    <div class="container-variant">
      <div
        class="container-variant__block"
        @click="$router.push('/effects/flowers')"
      >
        <Flowers />
      </div>
      <!-- <div
        class="container-variant__block"
      >
        <Spider />
      </div> -->
      <div
        class="container-variant__block"
        style="display:flex; justify-content:center;align-items:center;"
      >
        <HoverLink />
      </div>
      <div
        class="container-variant__block"
        style="display:flex; justify-content:center;align-items:center;"
      >
        <HoverBtn />
      </div>
      <div
        class="container-variant__block"
        style="display:flex; justify-content:center;align-items:center;"
      >
        <HoverBtn2 scale="0.4" />
      </div>
    </div>
  </div>
</template>

<script>
import Flowers from '../../components/Effects/Flowers/Flowers.vue'
// import Spider from './Spider/Spider.vue'
import HoverLink from '../../components/Effects/HoverLink/HoverLink.vue'
import HoverBtn from '../../components/Effects/HoverBtn/HoverBtn.vue'
import HoverBtn2 from '../../components/Effects/HoverBtn/HoverBtn_2.vue'

export default {
  components: {
    Flowers,
    // Spider,
    HoverLink,
    HoverBtn,
    HoverBtn2,
  }
}
</script>

<style lang="scss" scoped>
.tabbar-page {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>