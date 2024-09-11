<template>
  <nav class="main-nav">
    <router-link to="/tabbars">Tabbars</router-link>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/loadings">Loadings</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/ratings">Ratings</router-link>
    <router-link to="/effects">Effects</router-link>
    <router-link to="/others">Others</router-link>
  </nav>
  <div class="main-container">
    <router-view />
  </div>
</template>

<style>
.main-nav {
  display: flex;
  padding: 20px 16px;
  justify-content: space-evenly;
  max-width: 1280px;
  margin: 0 auto;
}
.main-container {
  width: 100vw;
  height: 100vh;
}
</style>
