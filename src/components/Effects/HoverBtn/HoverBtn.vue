<template>
  <div class="wrapper">
    <a href="#!" class="btn">hover me
      <svg>
        <rect></rect>
      </svg>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.wrapper {
    width: 200px;
    margin: 50px auto;
}

.btn {
    display: block;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-decoration: none;
    color: white;
    font-family: Arial;
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 3px;
    position: relative;
    text-align: center;
}

svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

svg rect {
    fill: transparent;
    stroke: white;
    stroke-width: 5px;
    stroke-dasharray: 10px 180px 20px 50px 20px 180px 20px 50px;
    width: 100%;
    height: 100%;
    transition: .5s all;
}

.btn:hover rect {
    stroke-dasharray: 200px 0 70px 0 200px 0 70px 0;
}
</style>