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
  padding: 0.5em
  border-radius: 0.5em
  background: linear-gradient(0.25turn, $base-color, $base-light)
  border: 1px solid $accent-color
  font-size: 1em

  h2
    color: $accent-light

  &:after
    transition: opacity 0.5s ease-in-out
    content: "originally an entry to GMTK Game Jam 2021 "
    color: $accent-light
    position: absolute
    padding: 0.25em
    transform: translate(-50%, 50%)
    margin-bottom: 2em
    width: max-content
    height: min-content
    opacity: 0

  &:hover
    background: linear-gradient(0.25turn, $base-color, $accent-color)

    &::after
      opacity: 1
</style>