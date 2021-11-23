<template>
  <nav class="flex align-center">
    <router-link to="/">Home</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/media">Media</router-link>
  </nav>
  <article id="content" class="flex align-center">
    <div id="clouds-top"><img src="./assets/img/drift-clouds-top.png" /></div>
    <div id="clouds-left"><img src="./assets/img/drift-clouds-left.png" /></div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <div id="clouds-right">
      <img src="./assets/img/drift-clouds-right.png" />
    </div>
    <div id="clouds-bottom">
      <img src="./assets/img/drift-clouds-bottom.png" />
    </div>
  </article>
  <footer>
    <span id="footer-content" class="flex-col align-center">
      <img src="./assets/img/spawner.png" />
      &copy; 2021 Game Creation Buddies
    </span>
  </footer>
</template>
<style lang="sass">
@import "./assets/css/_theme.sass"

#clouds-top, #clouds-bottom
  display: none

#app
  background: linear-gradient($base-color, $base-dark)
  color: #2c3e50
  max-width: 100%
  height: 100%

nav
  justify-content: space-evenly
  position: fixed
  top: 0
  z-index: 5
  background-color: $base-color
  filter: drop-shadow(0 0 0.15em $base-dark)
  width: 100%
  height: 5vh

  a
    font-weight: bold
    filter: drop-shadow(0 0 0.1em $base-dark)

    &.router-link-exact-active
      color: $accent-color
      

footer
  background-color: $base-dark
  width: 100%

  #footer-content
    padding: 2em


@media screen and (max-width: 1200px)
  #content
    flex-direction: column

    #clouds-left, #clouds-right
      display: none

    #clouds-top, #clouds-bottom
      display: block

      img
        width: 100%
</style>
