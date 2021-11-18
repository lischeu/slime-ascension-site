<template>
  <div class="slime">
    <h3>{{ name }}</h3>
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
</style>