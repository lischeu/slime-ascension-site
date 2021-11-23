<template>
  <nav class="flex align-center">
    <router-link to="/">Home</router-link>
    <router-link to="/info">Info</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
});
</script>