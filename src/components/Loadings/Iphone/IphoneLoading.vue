<template>
  <div class="flex flex-col items-center justify-center gap-3">
    <input
      v-model="currentValue"
      type="number"
    />
    <button @click="change">check</button>
    <!-- <div class="loading__cover"></div> -->
    <div
      class="relative w-fit"
      :class="{'bg-black rounded-full' : loading}"
    >
      <SMSIcon class="w-[100px] h-[100px]" />
      <div class="loading">
        <div class="loading__circle"></div>
      </div>
      <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress" ref="circleSVG">
        <circle class="circle-progress-circle" cx="50" cy="50" r="25" fill="none" stroke="transparent" stroke-width="8"></circle>
        <path d="M 50 25 A 25 25 0 0 1 71.90766700109658 62.04384185254288" class="circle-progress-value" fill="none" stroke="#fff" stroke-width="8"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import SMSIcon from '@/components/Icons/SMSIcon.vue'

const timer = ref(null)
const max = ref(100)
const min = ref(0)
const startValue = ref(0)
const currentValue = ref(0)
const clockwise = ref(true)
const circleSVG = ref(null)
const loading = ref(true)

watch(currentValue, (newValue, oldValue) => {
    // startValue.value = oldValue
    if(newValue === 99) {
      clearInterval(timer.value)
    }
  },
  {
    deep: true,
  },
)

const change = () => {
  updateGraph()
}

const updateGraph = () => {

  let startAngle = 0 - 90;

  let r = getRadius()

  let clockwise = true

  let angle = valueToAngle()

  animator(startValue.value, currentValue - startValue.value, 600, function (value) {
    angle = valueToAngle(value);

    const test = document.querySelector('.circle-progress-value')
    test.setAttribute('d', makeSectorPath(50, 50, r, startAngle, angle, clockwise))
  })
  startValue.value = currentValue.value
}

const animator = (startValue, valueChange, dur, cb) => {
  let tStart;

  var frame = function frame(t) {
    if (!tStart) tStart = t;
    t -= tStart;
    t = Math.min(t, dur);
    var curVal = easeInOutCubic(t, startValue, valueChange, dur);
    cb(curVal);
    if (t < dur) {
      requestAnimationFrame(frame)
    } else {
      cb(startValue + valueChange)
    }
  };

  requestAnimationFrame(frame);
}

const easeInOutCubic = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

const polarToCartesian = (r, angle) => {
  return {
    x: r * Math.cos(angle * Math.PI / 180),
    y: r * Math.sin(angle * Math.PI / 180)
  };
}

const valueToAngle = () => {
  return Math.min(360, Math.max(0, (currentValue.value - min.value) / (max.value - min.value) * 360));
}

const getRadius = () => {
  const svg = document.querySelector('.circle-progress')
  const progress = document.querySelector('.circle-progress-value')
  const width = Number(svg.getAttribute('width'))
  // return 50 - Math.max(parseFloat(this.doc.defaultView.getComputedStyle(this.graph.circle.el, null)['stroke-width']), parseFloat(this.doc.defaultView.getComputedStyle(this.graph.sector.el, null)['stroke-width'])) / 2;
  // return 50 - Math.max(parseFloat(`${Math.round(svg.getBoundingClientRect().width)}px`), parseFloat(`${Math.round(progress.getBoundingClientRect().width)}px`)) / 2
  return 50 - Math.max(parseFloat('50px'), parseFloat('50px')) / 2
}

const makeSectorPath = (cx, cy, r, startAngle, angle, clockwise) => {
  clockwise = !!clockwise;

  if (angle > 0 && angle < 0.3) {
    // Tiny angles smaller than ~0.3° can produce weird-looking paths
    angle = 0;
  } else if (angle > 359.999) {
    // If progress is full, notch it back a little, so the path doesn't become 0-length
    angle = 359.999;
  }

  let endAngle = startAngle + angle * (clockwise * 2 - 1)
  let startCoords = polarToCartesian(r, startAngle)
  let endCoords = polarToCartesian(r, endAngle)
  let x1 = cx + startCoords.x
  let x2 = cx + endCoords.x
  let y1 = cy + startCoords.y
  let y2 = cy + endCoords.y
  console.log("M", x1, y1, "A", r, r, 0, +(angle > 180), +clockwise, x2, y2)
  return ["M", x1, y1, "A", r, r, 0, +(angle > 180), +clockwise, x2, y2].join(' ');
}


onMounted(() => {
  updateGraph()
  // timer.value = setInterval(() => {
  //   currentValue.value += 1
  //   updateGraph()
  // }, 1000)
})

</script>

<style lang="scss">
.loading {
  position: absolute;
  z-index: 5;
  background: rgba(0,0,0,0.7);
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  &__circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 67px;
    height: 67px;
    transform: translate(-50%, -50%);
    border: 4px solid white;
    border-radius: 50%;
    z-index: 10;
    opacity: 0.7;
  }
}
.circle-progress {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  transform: translate(-50%, -50%);
  z-index: 15;
  opacity: 0.7;
}
.circle-progress-value {
	stroke-width: 50px;
	stroke: #fff;
  fill: #fff;
}
.circle-progress-circle {
	stroke-width: 50px;
	stroke: transparent;
}
.circle-progress-text {
	fill: white;
}
</style>
