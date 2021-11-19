<template>
  <div id="home" class="page-container">
    <div class="page-content" data-aos="fade-down">
      <img src="../assets/img/titlescreen.png" /><br />
      <a href="https://scorr.itch.io/slime-ascension"><Button text="Play the demo" /></a>
    </div>
  </div>
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

.page-container
  background-image: url("../assets/img/bigcloud.png")
  background-size: contain
  background-position: center
  background-repeat: no-repeat
  text-align: center

  img
    filter: drop-shadow(0 0 0.1em $base-dark)
    width: 75%
    margin-bottom: 1em

h1
  filter: drop-shadow(0 0 0.1em $base-dark)

@media screen and (max-width: 1200px)

  .page-container
    background-size: cover
    img
      width: 100%
</style>