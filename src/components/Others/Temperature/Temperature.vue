<template>
  <div class="container-temp">
    <div class="slider">
      <div class="slider-display">
        <div class="slider-display__icon">
          <svg viewBox="0 0 24 24" v-if="showIcon">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
          </svg>
          <svg viewBox="0 0 24 24" v-else>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>
        <div class="slider-display__value">
          <div>
            <h1>{{ temp }}</h1>
            <span v-if="showIcon">celsius</span>
            <span v-else>lumens</span>
          </div>
        </div>
        <div class="slider-display__input">
          <div class="slider-display__bar">
            <span ref="bar" v-for="b in bars" :style="`--i: ${b}`" :key="b"></span>
          </div>
          <input type="range" name="temp" id="temp" min="-45" max="90" v-model="temp">
        </div>
      </div>

      <div class="slider-controls">
        <div class="slider-controls__icons">
          <svg viewBox="0 0 24 24" @click="showTemp" :class="{ active: showIcon }">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
          </svg>
          <svg viewBox="0 0 24 24" @click="showLite" :class="{ active: !showIcon }">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>
        <div class="slider-controls__logo">ecobun</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    temp: 22,
    bars: 22,
    barsArray: [],
    showIcon: false,
    tempColor: "#66CCFF",
    liteColor: "#FFB332",
    currentColor: "",
    root: null
	}),
	methods: {
		topBars() {
			let half = this.barsArray.length / 2;
			let top = this.barsArray.slice(0, half);
			let bottom = this.barsArray.slice(half).reverse();
			for (let i = 0; i < top.length; i++) {
				let bar = top[i];
				bar.style.transform = `scale(${i * 0.2})`;
				bar.style.backgroundColor = "#FFFFFF";
			}
			for (let j = 0; j < bottom.length; j++) {
				let bar = bottom[j];
				bar.style.transform = `scale(${j * 0.2})`;
				bar.style.backgroundColor = this.currentColor;
			}
		},
		showTemp() {
			this.showIcon = true;
			this.root.style.setProperty("--current-color", this.tempColor);
			this.currentColor = this.tempColor;
			this.topBars();
		},
		showLite() {
			this.showIcon = false;
			this.root.style.setProperty("--current-color", this.liteColor);
			this.currentColor = this.liteColor;
			this.topBars();
		}
	},
	mounted() {
		this.barsArray = [...this.$refs.bar];
		this.root = document.documentElement;
		this.showTemp();
		this.topBars();
	}
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu+Mono&display=swap");

*,
::after,
::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--black-soft: #615959;
	--black: #221e1e;
	--white: #ececec;
	--current-color: #66ccff;

	--thumb-size: 20px;
}

body {
	min-height: 100vh;
	display: grid;
	place-items: center;
	font-family: "Poppins", sans-serif;

	background-color: var(--white);
}

.container-temp {
	width: 480px;
	height: 450px;
	display: grid;
	place-content: center;
	background: radial-gradient(
		60% 60% at 70% 20%,
		var(--black-soft),
		var(--black) 90%
	);
	color: var(--white);
	border-radius: 37%;
	position: relative;
}
.container-temp::after {
	content: "";
	position: absolute;
	bottom: -2px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	width: 70%;
	height: 3px;
	background-color: var(--black);
	filter: blur(5px);
}

input[type="range"] {
	-webkit-appearance: none;
	appearance: none;
	background: transparent;
	cursor: pointer;
	width: 100%;
}

/** Chrome, Safari, Opera, and Edge Chromium **/
input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	height: var(--thumb-size);
	width: var(--thumb-size);
	border-radius: 50%;
	background: var(--black);
	border: 2px solid var(--white);
	cursor: pointer;
}

/** Firefox **/
input[type="range"]::-moz-range-thumb {
	border: none;
	border-radius: 0;
	height: var(--thumb-size);
	width: var(--thumb-size);
	border-radius: 50%;
	background: var(--black);
	border: 2px solid var(--white);
}

.slider {
	width: 250px;
	height: 300px;
	/* border: 1px solid silver; */
}

.slider-display {
	display: grid;
	grid-template-columns: 1fr 50px;
	position: relative;
}
.slider-display__icon {
	position: absolute;
	top: 2%;
	left: 50%;
	transform: translateX(-50%);
}
.slider-display__icon svg {
	width: 40px;
	height: 40px;
	stroke: var(--current-color);
	stroke-width: 1;
	fill: none;
}
.slider-display__value {
	width: 240px;
	height: 250px;
	display: grid;
	place-items: center;
	/* border: 1px solid yellow; */
}
.slider-display__value div {
	width: 100%;
	text-align: center;
	/* border: 1px solid silver; */
}
.slider-display__value h1 {
	font-size: 7rem;
	line-height: 6rem;
	font-family: "Ubuntu Mono", serif;
}
.slider-display__value span {
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 2px;
}
.slider-display__input {
	width: 250px;
	height: 50px;
	display: grid;
	align-items: center;
	transform: rotate(-90deg) translate(-100px, -120px);
	position: relative;
	/* border: 1px solid silver; */
}
.slider-display__bar {
	position: absolute;
	width: 250px;
	height: 10px;
	pointer-events: none;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(5px, 1fr));
	justify-items: center;
	gap: 5px;
	z-index: -1;
	margin-top: 5px;
}
.slider-display__bar span {
	display: inline-block;
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background-color: var(--white);
}

.slider-controls {
	width: 250px;
	height: min-content;
	display: grid;
	place-items: center;
	/* border: 1px solid green; */
}
.slider-controls__icons {
	width: 80px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	margin: 1em 0 1.5em;
}
.slider-controls__icons svg {
	width: 24px;
	height: 24px;
	stroke: var(--white);
	stroke-width: 2;
	opacity: 0.4;
	cursor: pointer;
	pointer-events: all;
}
.slider-controls__icons svg.active {
	opacity: 1;
	pointer-events: none;
}
.slider-controls__logo {
	width: 100%;
	font-size: 1.7rem;
	font-family: "Poppins", sans-serif;
	font-weight: 100;
	text-align: center;
}
</style>