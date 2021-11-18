<template>
  <div id="home" class="page-container">
    <div class="page-content">
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
    width: 75%
    filter: drop-shadow(0 0 0.1em )
    margin-bottom: 1em
</style>