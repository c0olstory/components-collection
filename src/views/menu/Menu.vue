<template>
  <div ref="menu-page" class="menu-page">
    <h1 class="page-title">Menu variants</h1>
    <div class="container-variant">
      <div
        class="container-variant__block"
        style="position: relative;"
      >
        <Circle />
      </div>
      <div
        class="container-variant__block"
        style="position: relative;"
      >
        <PureCss />
      </div>
      <div
        class="container-variant__block"
      >
        <List scale="0.7" height="100%" />
      </div>
      <div
        class="container-variant__block"
        style="position: relative;"
      >
        <Tooltip scale="0.7" />
      </div>
    </div>
  </div>
</template>

<script>
import Circle from '../../components/Menu/Circle/Circle.vue'
import PureCss from '../../components/Menu/PureCss/PureCss.vue'
import List from '../../components/Menu/List/List.vue'
import Tooltip from '../../components/Menu/Tooltip/Tooltip.vue'

export default {
  data: () => ({
  }),
  components: {
    Circle,
    PureCss,
    List,
    Tooltip,
  }
}
</script>

<style lang="scss">
.menu-page {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>