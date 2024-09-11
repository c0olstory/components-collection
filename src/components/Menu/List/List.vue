<template>
  <div class="wrap" :style="`transform: scale(${scale}); height: ${height};`">
    <div class="flex-inner">
      <h2 class="p-title"><i data-feather="feather"></i>Icons List</h2>
      <div class="menu-list">
        <ul>
          <li><i data-feather="inbox"></i>Inbox</li>
          <li><i data-feather="calendar"></i>Meetings</li>
          <li><i data-feather="message-square"></i>Messages</li>
          <li><i data-feather="layers"></i>Projects</li>
          <li><i data-feather="settings"></i>Settings</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['scale', 'height'],
  mounted() {
    // feather.replace({ class: 'feather-icon', 'stroke-width': 2 })
  }
}
</script>

<style scoped>
:root {
  --brand-color: hsl(358, 100%, 68%);
}

* {
  box-sizing: border-box
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: hsl(220, 5%, 10%);
  color: hsl(220, 5%, 90%)
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh
}

.flex-inner {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  max-width: 240px;
}

.p-title {
  
  margin: 0 0 0 16px;
}

.menu-list {
  background: hsl(220, 5%, 13%);
  background: hsl(220, 5%, 13%);
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  margin-top: 16px
}

ul {
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  font-weight: 400;
  padding-left: 0;
  margin: 0;
  padding: 10px 12px;
  cursor: pointer;
  transition-property: background, color;
  transition-duration: .15s;
  transition-timing-function: ease-out;
  border-radius: 5px;
}

ul:hover > li:not(:hover) {
  color: hsl(255, 0%, 40%);
}

li:hover {
  background: hsl(220, 4%, 18%);
}


.feather-icon {
  font-size: 12px;
  color: var(--brand-color);
  height: 20px;
  width: 20px;
  margin-bottom: 0;
  margin-right: 12px;
  transition: color .05s ease-out;
}
</style>