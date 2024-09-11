<template>
  <div ref="loadings-page" class="loadings-page">
    <h1 class="page-title">Loadings</h1>
    <div class="container-variant">
      <div
        class="container-variant__block flex items-center justify-center"
      >
        <Loading1 />
      </div>
      <div
        class="container-variant__block flex items-center justify-center"
      >
        <LoadingCat />
      </div>
      <div
        class="container-variant__block flex items-center justify-center"
      >
        <Snow />
      </div>
      <div
        class="container-variant__block flex items-center justify-center"
      >
        <IphoneLoading />
      </div>
      <!-- <div
        class="container-variant__block flex items-center justify-center"
      >
        <Confetti />
      </div> -->
    </div>
  </div>
</template>

<script>
import Loading1 from '../../components/Loadings/1/1.vue'
import LoadingCat from '../../components/Loadings/cat/cat.vue'
import Snow from '../../components/Loadings/snow/snow.vue'
import IphoneLoading from '../../components/Loadings/Iphone/IphoneLoading.vue'
// import Confetti from '../../components/Loadings/Confetti/Confetti.vue'

export default {
  data: () => ({
  }),
  components: {
    Loading1,
    LoadingCat,
    Snow,
    IphoneLoading,
    // Confetti,
  }
}
</script>

<style lang="scss">
.loadings-page {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>