<template>
  <div id="wrapper" :style="`transform: scale(${scale})`">
    <header>
      <div class="iconDiv" tooltip="Load file" tabindex="0">
        <div class="iconSVG">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>
      <div class="iconDiv" tooltip="Download" tabindex="0">
        <div class="iconSVG">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="divider"></div>
      <div class="iconDiv" tooltip="Notifications" tabindex="0">
        <div class="iconSVG">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
      </div>
      <div class="iconDiv" tooltip="Log out" tabindex="0">
        <div class="iconSVG">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ['scale'],
}
</script>

<style scoped lang="scss">

$light: rgb(203 213 225);
$mid: rgb(51 65 85);
$dark: rgb(71 85 105);

:root {
  --color-light: rgb(203 213 225);
  --color-mid: rgb(51 65 85);
  --color-dark: rgb(71 85 105);
}
body {
  background-color: black;
  color: $light;
  font-family: sans-serif;
  font-family: "Inter", sans-serif;
  font-size: 14px;
}
body::before {
  content: "Hover or tap the icons.";
  font-size: 18px;
  position: absolute;
  left: 50%;
  top: calc(50% - 100px);
  transform: translate(-50%, -50%);
}
body::after {
  content: "Icons are borrowed from Heroicons.";
  position: absolute;
  bottom: 36px;
  right: 36px;
}
#wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
}
header {
  width: 340px;
  padding: 0 16px;
  display: flex;
  border: 1px solid $dark;
  border-radius: 16px;
}
.iconDiv {
  height: 36px;
  width: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 4px;
  padding: 4px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: width 300ms ease-in-out 0s, background-color 300ms linear 200ms;
}
.iconSVG {
  height: 36px;
  aspect-ratio: 1 / 1;
}
.iconDiv:hover,
.iconDiv:focus-visible {
  width: 142px;
  background-color: $mid;
  transition: width 300ms ease-in-out 0s, background-color 100ms linear 0s;
}
.iconDiv:focus-visible {
  outline: 1px solid $mid;
  outline-offset: 4px;
}
.iconDiv:active {
  opacity: 0.9;
}
.iconDiv::after {
  content: attr(tooltip);
  margin-left: 12px;
  animation: fadeIn 600ms linear forwards;
}
.spacer {
  flex-grow: 1;
}
.divider {
  height: 36px;
  width: 1px;
  margin: 24px 18px;
  background-color: $dark;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>