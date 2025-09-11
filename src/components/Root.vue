<script setup lang="ts">
import { toRef } from "vue";
import Recursive from "./Recursive.vue";

// Accept sha1 as a prop instead of reading from the route
const props = defineProps<{
  sha1: string;
}>();
const sha1 = toRef(props, "sha1");
</script>

<template>
  <Recursive :sha1="sha1" />
</template>

<style scoped></style>
