<template>
  <div class="container-nav-tab">
    <nav class="navigation-tab" :style="`transform: scale(${scale})`">
      <div ref="1" @click="changeActiveLink('1')" class="navigation-tab-item active">
        <span class="navigation-tab__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-list"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </span>
        <span class="navigation-tab__txt">List</span>
      </div>
      <div ref="2" @click="changeActiveLink('2')" class="navigation-tab-item">
        <span class="navigation-tab__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-tag"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7" y2="7"></line>
              </svg>
            </span>
        <span class="navigation-tab__txt">Tags</span>
      </div>
      <div ref="3" @click="changeActiveLink('3')" class="navigation-tab-item">
        <span class="navigation-tab__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-shopping-bag"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </span>
        <span class="navigation-tab__txt">Bag</span>
      </div>
      <div ref="4" @click="changeActiveLink('4')" class="navigation-tab-item">
        <span class="navigation-tab__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </span>
        <span class="navigation-tab__txt">Notifications</span>
      </div>
      <div ref="overlay" class="navigation-tab-overlay"></div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['scale'],
  methods: {
    changeActiveLink(num) {
      const arrLinks = document.querySelectorAll('.navigation-tab-item')
      arrLinks.forEach(el => {
        el.classList.remove('active')
      });
      this.$refs[num].classList.add('active')
      this.$refs['overlay'].style.left=`${(num - 1) * 130}px`
    }
  },
}
</script>

<style scoped lang="scss">
* {
  font-family: "Roboto Condensed", sans-serif;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #7dbfff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-nav-tab {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation-tab {
  height: 150px;
  width: 600px;
  background-color: #fff;
  box-shadow: 0 50px 30px 0 rgba(#000, 0.175);
  border-radius: 20px 20px 90px 90px;
  overflow: hidden;
  border: 15px solid #fff;
  display: flex;
  position: relative;
  flex-shrink:0;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 130px;
    flex-shrink: 0;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    z-index: 2;

    &.active {
      width: 210px;

      .navigation-tab__icon {
        transform: translate(0px, -10px);
      }
      .navigation-tab__txt {
        opacity: 1;
        transform: translate(0, 10px);
      }
    }
  }

  &-overlay {
    border-radius: 20px;
    background-color: #e4f2ff;
    height: 100%;
    width: 210px;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }

  &__icon {
    display: block;
    color: #4298e7;
    transition-duration: 0.3s;
    line-height: 1;
    transform: translate(0, 11px);
  }

  &__txt {
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: #4298e7;
    opacity: 0;
    transition-duration: 0.3s;
    // transition-delay: 0.1s;
    transform: translate(0, 20px);
    user-select: none;
  }
}

</style>