<template>
    <span class="button">{{text}}</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
      text: String
  }
});
</script>
<style scoped lang="sass">
@import "../assets/css/_theme.sass"

span
    background-color: $accent-dark
    font-size: 1.5em
    border-radius: 0.5em
    padding: 0.25em
</style>