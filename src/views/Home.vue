<template>
  <article id="home" class="flex-col">
    <h1>Slime Ascension</h1><a href="https://scorr.itch.io/slime-ascension" target="_blank"
      ><Button text="Jam version"
    /></a>
    <img src="../assets/img/titlescreen.png" />
    
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "Home",
  components: {
    Button,
  },
});
</script>
<style scoped lang="sass">
@import "../assets/css/_theme.sass"

#home
  background-image: url("../assets/img/bigcloud.png")
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  text-align: center

  img
    width: 100%

@media screen and (max-width: 1200px)
  .page-container
    background-size: cover
</style>