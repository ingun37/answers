<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Recursive from "./Recursive.vue";

const DEFAULT_SHA1 = "2aed5404c83f7a46aa249e0a6328af756b19d513";

const route = useRoute();
const sha1 = ref(DEFAULT_SHA1);

onMounted(() => {
  const q = route.query.sha1;
  if (Array.isArray(q)) {
    sha1.value = q[0] && q[0].trim() ? q[0].trim() : DEFAULT_SHA1;
  } else {
    sha1.value = typeof q === "string" && q.trim() ? q.trim() : DEFAULT_SHA1;
  }
});
</script>

<template>
  <Recursive :sha1="sha1" />
</template>

<style scoped></style>
