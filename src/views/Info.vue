<template>
  <div class="page-container">
    <div class="page-content">
      <Slime name="Axe Slime" img="axe-slime.png" />
      <Slime name="Shield Slime" img="shield-slime.png" />
      <Slime name="Unicorn Slime" img="unicorn-slime.png" />
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
.page-content
  display: grid
  grid-template-columns: repeat(3,1fr)

@media screen and (max-width: 1200px)
  .page-content
    grid-template-rows: repeat(3,1fr)
    grid-template-columns: 1fr
</style>