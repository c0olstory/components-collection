<template>
  <div ref="gallery-page" class="gallery-page">
    <h1 class="page-title">Gallery variants</h1>
    <div class="container-variant">
      <div
        class="container-variant__block"
        style="position: relative;"
      >
        <Gallery1 />
      </div>
    </div>
  </div>
</template>

<script>
import Gallery1 from '../../components/Gallery/1/1.vue'

export default {
  data: () => ({
  }),
  components: {
    Gallery1,
  }
}
</script>

<style lang="scss">
.gallery-page {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>