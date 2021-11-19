<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/media">Media</router-link>
  </div>
  <section id="content">
    <div id="clouds-top"><img src="./assets/img/drift-clouds-top.png" /></div>
    <div id="clouds-left"><img src="./assets/img/drift-clouds-left.png" /></div>
    <router-view id="current" />
    <div id="clouds-right">
      <img src="./assets/img/drift-clouds-right.png" />
    </div>
    <div id="clouds-bottom">
      <img src="./assets/img/drift-clouds-bottom.png" />
    </div>
  </section>
  <footer>
    <span id="footer-content">
      <span id="footer-links">
        <a href="">Terms of Service</a> | <a href="">Privacy Policy</a> |
        <a href="">Press Kit</a>
      </span>
      <img src="./assets/img/spawner.png" />
      &copy; 2021 Game Creation Buddies
    </span>
  </footer>
</template>
<style lang="sass">
@import "./assets/css/_theme.sass"
#content
  margin-top: 10vh
  display: flex
  align-items: center
  justify-content: center

#clouds-top, #clouds-bottom
  display: none

#app
  background: linear-gradient($base-color, $base-dark)
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  max-width: 100%
  height: 100%

#nav
  position: fixed
  z-index: 5
  top: 0
  background-color: $base-light
  display: flex
  align-items: center
  justify-content: space-evenly
  width: 100%
  height: 5vh
  text-transform: uppercase
  font-size: 1.5em
  font-weight: bold
  filter: drop-shadow(0 0 0.1em $base-dark)

  a
    filter: drop-shadow(0 0 0.1em $base-dark)
    &.router-link-exact-active
      transition: 0.2s
      color: $accent-light

footer
  background-color: $base-dark
  height: auto
  width: 100%
  font-weight: bold
  text-align: center

  img
    width: 10vw

  #footer-content
    gap: 1em
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 1em

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
