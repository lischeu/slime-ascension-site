<template>
  <div class="slime">
    <h2>{{ name }}</h2>
    <img :src="require('@/assets/img/slimes/' + img  + '')" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slime",
  props: {
    name: String,
    img: String,
    desc: String,
  },
});
</script>
<style scoped lang="sass">
@import "../assets/css/_theme.sass"

img
  width: 100%
</style>