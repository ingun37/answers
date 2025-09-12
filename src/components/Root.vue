<script setup lang="ts">
import { toRef } from "vue";
import Recursive from "./Recursive.vue";
import type { Page, PageContent } from "@/types.ts";

// Accept sha1 as a prop instead of reading from the route
const props = defineProps<{
  sha1: string;
}>();
const sha1 = toRef(props, "sha1");
const emit = defineEmits<{
  (e: "expand-child", child: PageContent): void;
  (e: "loaded", page: Page): void;
}>();
</script>

<template>
  <Recursive
    :sha1="sha1"
    @expand-child="(e) => emit('expand-child', e)"
    @loaded="(e) => emit('loaded', e)"
  />
</template>

<style scoped></style>
