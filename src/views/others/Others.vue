<template>
  <div ref="others-page" class="others-page">
    <h1 class="page-title">Others</h1>
    <div class="container-variant">
      <div
        class="container-variant__block"
        style="display:flex;justify-content:center;align-items:center;"
      >
        <Temperature />
      </div>
      <div
        class="container-variant__block"
      >
        <LogIn1 />
      </div>
    </div>
  </div>
</template>

<script>
import Temperature from '../../components/Others/Temperature/Temperature.vue'
import LogIn1 from '../../components/Others/LogIn/LogIn_1.vue'

export default {
  data: () => ({
  }),
  components: {
    Temperature,
    LogIn1
  }
}
</script>

<style lang="scss">
.others-page {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>