<template>
  <article>
    <section id="home" class="flex-col align-center">
      <a href="https://scorr.itch.io/slime-ascension" target="_blank"
        ><Button text="Jam version"
      /></a>
      <img src="../assets/img/titlescreen.png" />
    </section>
    <section data-aos="fade-in" id="gameplay" class="flex-col align-center">
      <h1>Embrace the sun</h1>
      <ul>
        <li>Devote your afterlife to the great sun</li>
        <li>Build a team of slime friends</li>
        <li>Enhance your friends with powerful buffs</li>
      </ul>
      <img src="../assets/img/ghost-cat.png" />
    </section>
    <section id="slimes" class="flex align-center">
      <h1>Befriend</h1>
      <Slime name="Axe" img="axe-slime.png" desc="*krrt*" /> + 
      <Slime name="Shield" img="shield-slime.png" desc="*shing*" /> + 
      <Slime name="Unicorn" img="unicorn-slime.png" desc="*pew*" />
      <h3>...and more!</h3>
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
<style scoped lang="sass">
@import "../assets/css/_theme.sass"

section
  max-width: 100%
  min-height: 100vh

#home
  img
    width: 100%

#gameplay
  img
    width: 20%

@media screen and (max-width: 1200px)
  .page-container
    background-size: cover

  #slimes
    flex-direction: column
    gap: 5em
</style>