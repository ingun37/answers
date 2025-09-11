<script setup lang="ts">
const props = defineProps<{
  src: string;
  time: string;
  attrKey: string;
}>();
</script>

<template>
  <div style="margin-bottom: 12px">
    <div class="subhtml-header">
      <h3 class="text-subtitle-1">{{ attrKey }}</h3>
      <div class="text-caption" style="opacity: 0.7">
        Last modified: {{ time }}
      </div>
    </div>
    <iframe
      :src="src"
      style="
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 6px;
      "
      height="200"
      loading="lazy"
      title="SubHtml"
    />
  </div>
</template>

<style scoped>
.subhtml-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 4px;
}
</style>
