<script setup lang="ts">
const props = defineProps<{
  html: string;
}>();
</script>

<template>
  <div
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
