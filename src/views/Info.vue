<template>
  <div class="page-container">
    <div class="page-content flex-col">
      <h1>Embrace the sun</h1>
      <ul class="gameplay">
        <li>Build a team of slime friends</li>
        <li>Enhance your friends with powerful buffs</li>
        <li>Achieve ascension by helping the great sun</li>
      </ul>
      <br />
      <span class="slimes">
        <Slime name="Axe Slime" img="axe-slime.png" desc="*krrt*" />
        <Slime name="Shield Slime" img="shield-slime.png" desc="*shing*" />
        <Slime name="Unicorn Slime" img="unicorn-slime.png" desc="*pew*" />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Slime from "@/components/Slime.vue";

export default defineComponent({
  components: {
    Slime,
  },
});
</script>
<style scoped lang="sass">
.slimes
  display: flex

.gameplay
  display: table
  margin: 0 auto
</style>