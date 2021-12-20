<template>
  <div class="slime flex-col">
    <h2>{{ name }}</h2>
    <img data-aos="fade-left" :src="require('@/assets/img/slimes/' + img + '')" />
    <span data-aos="fade-right">{{ desc }}</span>
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

.slime
  text-align: center

img
  width: 100%
</style>