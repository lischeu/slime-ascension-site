<template>
  <button class="button">
    <h2>{{ text }}</h2>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    text: String,
  },
});
</script>
<style scoped lang="sass">
@import "../assets/css/_theme.sass"

button
  background: linear-gradient(0.25turn, $accent-dark, $accent-color)
  filter: drop-shadow(0 0.2em 0 $accent-dark)
  background-color: $accent-dark
  padding: 0.5em
  border-radius: 0.5em
  border: 0
  font-size: 1em

  h2
    color: $accent-light

  &:hover
    background: linear-gradient(0.25turn, $accent-color, $accent-light)

    h2
      color: $neutral-light
</style>