<template>
  <div ref="ratings-page" class="ratings-page">
    <h1 class="page-title">Ratings</h1>
    <div class="container-variant">
      <div
        class="container-variant__block"
        style="display:flex;justify-content:center;align-items:center;"
      >
        <Rating1 />
      </div>
    </div>
  </div>
</template>

<script>
import Rating1 from '../../components/Ratings/1/Ratings_1.vue'

export default {
  data: () => ({
  }),
  components: {
    Rating1,
  }
}
</script>

<style lang="scss">
.ratings-page {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>