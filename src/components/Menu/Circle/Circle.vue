<template>
  <div ref="menu-page-circle" class="menu-page-circle">
    <div id="menu-page-circle-wrapper" style="width: 100%; height: 100%;">
      <nav class="menu-wrapper">
        <button class="menu-btn" has-ripple="true">
          <i></i>
          <i></i>
          <i></i>
          <span class="ripple"></span>
        </button>
        <ul class="menu">
          <li ref="home" class="menuitem-wrapper">
            <div class="icon-holder">
              <a @click="clickToMenuItem($event, 'home', 0)" href="#" class="menu-item">
                  <i class="material-icons">home</i>
              </a>
            </div>
            <svg class="circle-holder">
              <circle r="88" cx="50%" cy="50%" fill="none">
              </circle>
            </svg>
          </li>
          <li ref="face" class="menuitem-wrapper">
            <div class="icon-holder">
              <a @click="clickToMenuItem($event, 'face', 1)" href="#" class="menu-item">
                  <i class="material-icons">face</i>
              </a>
            </div>
            <svg class="circle-holder">
              <circle r="88" cx="50%" cy="50%" fill="none">
              </circle>
            </svg>
          </li>
          <li ref="android" class="menuitem-wrapper">
            <div class="icon-holder">
              <a @click="clickToMenuItem($event, 'android', 2)" href="#" class="menu-item">
                  <i class="material-icons">android</i>
              </a>
            </div>
            <svg class="circle-holder">
              <circle r="88" cx="50%" cy="50%" fill="none">
              </circle>
            </svg>
          </li>
          <li ref="shopping_cart" class="menuitem-wrapper">
            <div class="icon-holder">
              <a @click="clickToMenuItem($event, 'shopping_cart', 3)" href="#" class="menu-item">
                  <i class="material-icons">shopping_cart</i>
              </a>
            </div>
            <svg class="circle-holder">
              <circle r="88" cx="50%" cy="50%" fill="none">
              </circle>
            </svg>
          </li>
          <li ref="room" class="menuitem-wrapper">
            <div class="icon-holder">
              <a @click="clickToMenuItem($event, 'room', 4)" href="#" class="menu-item">
                  <i class="material-icons">room</i>
              </a>
            </div>
            <svg class="circle-holder">
              <circle r="88" cx="50%" cy="50%" fill="none">
              </circle>
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    clickToMenuItem(e, target, idx) {
      e.preventDefault()
      this.$refs[`${target}`].classList.add('spin')
      setTimeout(() => {
        this.$refs[`${target}`].classList.remove('spin')

        const container = document.getElementById('menu-page-circle-wrapper')
        const menu = document.querySelector('.menu')
        const btn = document.querySelector('.menu-btn')

        container.removeAttribute('class')
        container.classList.add(`bg-${idx}`)
        btn.classList.remove('clicked')
        menu.classList.remove('open')
      }, 750)
    }
  },
  mounted() {
    const btn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu')

    btn.addEventListener('click', () => {
      btn.classList.toggle('clicked')
      menu.classList.toggle('open')
    })
  }
}
</script>

<style lang="scss" scoped>
$spin-speed: 0.7s;
$color-collection: ('#2980b9', '#c0392b', '#1abc9c', '#f39c12', '#8e44ad');
$degFactor: 71.5;

.menu-page-circle {
  font-size: 16px;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: #2c3e50;
  box-sizing: border-box;
  transition: all 0.25s ease-in;
}

// html {
//   font-size: 16px;
// }

// body {
//   background: #2c3e50;
//   box-sizing: border-box;
//   transition: all 0.25s ease-in;
// }
*, *:before, *:after {
  box-sizing: inherit;
}
a {color: white;text-decoration: none;}

.menu-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 30rem;
  height: 30rem;
  margin-top: -15rem;
  margin-left: -15rem;
}

.menu {
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: center;
  transition: all 0.08s ease-in-out;
  
  li {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 4rem;
    height: 80%;
    margin-top: -12rem;
    margin-left: -2rem;
    text-align: center;
    
    &.spin {
      z-index: 5;
      .icon-holder {animation: spin $spin-speed linear forwards;}
      .circle-holder {
        display: block;
        circle {animation: dash $spin-speed linear forwards;}
      }
    }
  }
  
  a {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 4rem;
    margin-top: 4.5rem;
    padding: 1rem;
    border-radius: 100%;
    transform: scale(1,1);
    
    i {
      display: inline-block;
      vertical-align: middle;
      line-height: 1.2;
    }
  }
  
  &.open {
    transform: scale(1);
    // animation: bouncein linear 0.1s forwards 1;
  }
}

.icon-holder {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 4rem;
  height: 100%;
}

.circle-holder {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  display: none;
  width: 24rem;
  height: 24rem;
  margin: -12rem;
  padding: 1rem;
  transform: rotate(-90deg);
  
  circle {
    width: 100%;
    height: 100%;
    stroke-width: 4rem;
    stroke-dasharray: 560;
    stroke-dashoffset: 560;
    stroke-linecap: round;
  }
}

.menu-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: block;
  width: 4rem;
  height: 4rem;
  margin: -2rem;
  padding: 1.3rem;
  background: white;
  border: none;
  box-shadow: none;
  border-radius: 100%;
  text-align: center;
  line-height: 1;
  appearance: none;
  outline: none;
  cursor: pointer;
  font-size: 0;
  
  i {
    position: relative;
    z-index: 11;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 0.1rem;
    margin: 0 auto;
    background: #2c3e50;
  }
  i:nth-child(2) {
    margin: 0.34rem auto;
  }
}

.clicked {
  &.menu-btn {
    animation: buttonactive ease-in 0.2s forwards 1;

    i:first-child {
      animation: top-down ease-in 0.2s forwards 1;
    }
    i:nth-child(2) {
      animation: middle ease-in 0.01s forwards 1;
    }
    i:nth-child(3) {
      animation: down-top ease-in 0.2s forwards 1;
    }
  }
  
  .ripple {
    animation: ripples ease-in 0.35s forwards 1;
  }
}

.ripple {
  position: absolute;
  top: -1rem;
  left: -1rem;
  z-index: 10;
  display: block;
  width: 6rem;
  height: 6rem;
  transform: scale(0.5);
  opacity: 0;
  border: 2rem solid white;
  border-radius: 100%;
}

@for $i from 0 to length($color-collection) {
  .menu li:nth-child(#{$i+1}) {
    transform: rotate(#{$i*$degFactor}deg);
    
    a {
      transform: rotate(-#{$i*$degFactor}deg);
      background: unquote(nth($color-collection, $i+1));
    }
    circle {stroke: unquote(nth($color-collection, $i+1));}
  }
  
  .bg-#{$i} {background: unquote(nth($color-collection, $i+1));}
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  80% {
    transform: rotate(360deg);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 560;
    stroke-width: 4rem;
  }
  80% {
    stroke-dashoffset: 0;
    stroke-width: 4rem;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    stroke-width: 6rem;
    opacity: 0;
  }
}

@keyframes buttonactive {
  0% {
    background: white;
    transform: rotate(0deg);
  }
  100% {
    background: lighten(#34495e, 15%);
    transform: rotate(-90deg);
  }
}

@keyframes middle {
  0% {
    opacity: 1;
    left: 0;
  }
  100% {
    opacity: 0;
    left: -4rem;
  }
}

@keyframes top-down {
  0% {
    top: 0;
    transform: rotate(0);
  }
  100% {
    top: 0.35rem;
    transform: rotate(-45deg);
  }
}

@keyframes down-top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  100% {
    top: -0.4rem;
    transform: rotate(45deg);
  }
}

@keyframes ripples {
  0%   {
    opacity: 1.0;
    transform: scale(0.5);
    border-width: 3rem;
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
    border-width: 0rem;
  }
}

@keyframes bouncein {
  to {
    transform: scale(1);
  }
}
</style>