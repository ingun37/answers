<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

import renderMathInElement from "katex/contrib/auto-render";

const props = defineProps<{
  html: string;
}>();
watch(
  () => props.html,
  async () => {
    await nextTick();
    await nextTick();
    await nextTick();
    if (!rootEl.value) return;
    renderMathInElement(rootEl.value, {
      // customised options
      // • auto-render specific keys, e.g.:
      delimiters: [
        { left: "$`", right: "`$", display: false },
        { left: "\\\\(", right: ")\\\\", display: true },
      ],
      // • rendering keys, e.g.:
      throwOnError: true,
    });
  },
);
const rootEl = ref<HTMLElement | null>(null);
</script>

<template>
  <div
    ref="rootEl"
    class="subhtml-content"
    v-html="html"
    style="
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 6px;
      padding: 12px;
      overflow-x: auto;
    "
  />
</template>

<style scoped>
.subhtml-content :deep(table) {
  border-collapse: collapse;
}
.subhtml-content :deep(td),
.subhtml-content :deep(th) {
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 4px 8px;
}
</style>
