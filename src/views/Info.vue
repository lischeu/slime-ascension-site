<template>
  <article id="info" class="flex-col">
    <section id="gameplay">
      <h1>Embrace the sun</h1>
      <ul>
        <li>Devote your afterlife to the great sun</li>
        <li>Build a team of slime friends</li>
        <li>Enhance your friends with powerful buffs</li>
      </ul>
    </section>
    <section id="slimes" class="flex">
      <Slime name="Axe" img="axe-slime.png" desc="*krrt*" />
      <Slime name="Shield" img="shield-slime.png" desc="*shing*" />
      <Slime name="Unicorn" img="unicorn-slime.png" desc="*pew*" />
    </section>
  </article>
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
#gameplay
  display: table
  margin: auto

@media screen and (max-width: 1200px)
  #slimes
    flex-direction: column
    gap: 5em
</style>