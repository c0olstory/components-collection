<template>
  <ul class="rating">
    <li>
      <button>
        <div class="star"></div>
      </button>
    </li>
    <li>
      <button>
        <div class="star"></div>
      </button>
    </li>
    <li>
      <button>
        <div class="star"></div>
      </button>
    </li>
    <li>
      <button>
        <div class="star"></div>
      </button>
    </li>
    <li>
      <button>
        <div class="star"></div>
      </button>
    </li>
  </ul>
</template>

<script>
import gsap from "gsap"

export default {
  mounted() {
    document.querySelectorAll('.rating').forEach(rating => {

      let entries = rating.querySelectorAll('li')

      entries.forEach(function(entry, index) {

          entry.addEventListener('click', e => {

              let active = [...entries].filter((e, i) => i >= index && !e.classList.contains('active')),
                  inactive = [...entries].filter((e, i) => i < index && e.classList.contains('active'))

              if(active.length) {
                  gsap.to(active.reverse(), {
                      onStart() {
                          this._targets.forEach(e => e.classList.add('active', 'activeColor'))
                      },
                      keyframes: [{
                          '--star-scale': 0,
                          '--star-y': 0,
                          duration: 0
                      }, {
                          '--star-scale': 1,
                          '--dot-scale': 0,
                          duration: .9,
                          ease: 'elastic.out(1, .7)',
                          stagger: .03
                      }]
                  })
              }

              if(inactive.length) {
                  gsap.to(inactive, {
                      onStart() {
                          this._targets.forEach(e => e.classList.remove('activeColor'))
                      },
                      onComplete() {
                          this._targets.forEach(e => e.classList.remove('active'))
                      },
                      '--star-before-r': -20,
                      '--star-before-y': -8,
                      '--star-after-r': 20,
                      '--star-after-y': 8,
                      duration: .65,
                      clearProps: true
                  })
                  gsap.to(inactive, {
                      '--star-o': 0,
                      '--star-blur': 10,
                      '--star-y': 48,
                      '--dot-scale': .8,
                      duration: .5,
                      delay: .15,
                      clearProps: true
                  })
              }

          })

      })
  })
  }
}
</script>

<style scoped lang="scss">
.rating {
    --default: #8A91B4;
    --active: #FDCF10;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row-reverse;
    li {
        --star-before-r: 0;
        --star-before-y: 0;
        --star-after-r: 0;
        --star-after-y: 0;
        --star-o: 1;
        --star-blur: 0;
        padding: 0 4px;
        &:hover {
            --color: var(--active);
            --dot-scale: 1;
            & ~ li {
                --color: var(--active);
                --dot-scale: 1;
            }
        }
        &.active {
            --star-scale: 1;
            --dot-duration: 0s;
        }
        &.activeColor {
            --color: var(--active);
        }
        button {
            -webkit-tap-highlight-color: transparent;
            -webkit-appearance: none;
            outline: none;
            background: none;
            border: none;
            padding: 0;
            margin: 0;
            display: block;
            cursor: pointer;
            width: 40px;
            height: 40px;
            position: relative;
            transform: scale(var(--scale, 1));
            transition: transform .2s;
            &:active {
                --scale: .8;
            }
            &:before {
                content: '';
                display: block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                position: absolute;
                left: 12px;
                top: 12px;
                background: var(--color, var(--default));
                transform: scale(var(--dot-scale, .8)) translateZ(0);
                transition: background .25s, transform var(--dot-duration, .25s);
            }
            .star {
                position: relative;
                width: 40px;
                height: 40px;
                opacity: var(--star-o);
                filter: blur(calc(var(--star-blur) * 1px));
                transform: translateY(calc(var(--star-y, 0) * 1px)) scale(var(--star-scale, 0)) translateZ(0);
                &:before,
                &:after {
                    content: '';
                    display: block;
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transform: translateY(calc(var(--y, var(--star-before-y)) * 1px)) rotate(calc(var(--r, var(--star-before-r)) * 1deg)) translateZ(0);
                    background: var(--color, var(--default));
                    transition: background .25s;
                }
                &:before {
                    clip-path: polygon(50% 5%, 65% 35%, 30% 60%, 2.5% 40%, 35% 35%);
                }
                &:after {
                    --r: var(--star-after-r);
                    --y: var(--star-after-y);
                    clip-path: polygon(65% 35%, 97.5% 40%, 70% 60%, 80% 95%, 50% 74%, 20% 95%, 30% 60%);
                }
            }
        }
    }
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

* {
    box-sizing: inherit;
    &:before,
    &:after {
        box-sizing: inherit;
    }
}

// Center & dribbble
body {
    min-height: 100vh;
    display: flex;
    font-family: 'Inter', Arial;
    justify-content: center;
    align-items: center;
    background: #ECEFFC;
    .dribbble {
        position: fixed;
        display: block;
        right: 20px;
        bottom: 20px;
        img {
            display: block;
            height: 28px;
        }
    }
    .twitter {
        position: fixed;
        display: block;
        right: 64px;
        bottom: 14px;
        svg {
            width: 32px;
            height: 32px;
            fill: #1da1f2;
        }
    }
}
</style>