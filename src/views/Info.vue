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
  display: flex
  
  img
    object-fit: contain

@media screen and (max-width: 1200px)
  .page-content
    flex-direction: column
</style>