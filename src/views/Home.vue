<template>
  <article>
    <section id="home" class="flex-col align-center">
      <h1>The Great Sun Awaits you...</h1>
      <img
        data-aos="fade-down"
        class="titlescreen"
        src="../assets/img/titlescreen.png"
      />
      <a href="https://scorr.itch.io/slime-ascension" target="_blank"
        ><Button text="Play the Demo"
      /></a>
    </section>

    <div id="title" class="flex-col align-center">
      <img
        data-aos="fade-down"
        class="top"
        src="../assets/img/title/friends.png"
      />
      <img
        data-aos="fade-in"
        class="middle"
        src="../assets/img/title/clouds.png"
      />
      <img data-aos="fade-up" class="sun" src="../assets/img/title/sun.png" />
      <img class="bottom" src="../assets/img/title/sky.png" />
    </div>

    <section id="gameplay" class="flex-col align-center">
      <h1 data-aos="fade-right">Embrace the sun</h1>
      <ul data-aos="fade-in">
        <li>Devote your afterlife to the great sun</li>
        <li>Build a team of slime friends</li>
        <li>Enhance your friends with powerful buffs</li>
      </ul>
      <img class="ghost" src="../assets/img/ghost-cat.png" />
    </section>
    <section id="slimes" class="flex align-center">
      <h1>Befriend</h1>
      <Slime name="Axe" img="axe-slime.png" desc="*krrt*" /> +
      <Slime name="Shield" img="shield-slime.png" desc="*shing*" /> +
      <Slime name="Unicorn" img="unicorn-slime.png" desc="*pew*" />
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
import Slime from "@/components/Slime.vue";

export default defineComponent({
  name: "Home",
  components: {
    Button,
    Slime,
  },
});
</script>
<style lang="sass">
@import "../assets/css/_theme.sass"

@keyframes hover-float
  0%
    transform: translateY(0.5em)

  50%
    transform: translateY(-0.25em)

  100%
    transform: translateY(0.5em)

section
  max-width: 100%
  min-height: 100vh

#home
  background: url("../assets/img/sun-bg.png")
  background-size: contain
  background-position: center
  background-repeat: no-repeat

.titlescreen
  display: none

#title
  width: 100vw
  height: 100vh

  img
    width: 100%

  .top
    position: absolute
    z-index: 4

  .middle
    position: absolute
    z-index: 3

  .sun
    position: absolute
    z-index: 2

  .bottom
    position: absolute
    z-index: 1

#gameplay
  img
    width: 20%

.ghost
  animation-duration: 2s
  animation-name: hover-float
  animation-iteration-count: infinite

@media screen and (max-width: 1200px)
  #title
    display: none

  .titlescreen
    display: block
    width: 100%

  #home
    background: none

  .page-container
    background-size: cover

  #slimes
    flex-direction: column
    gap: 5em

  .title
</style>