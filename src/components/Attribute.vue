<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import SubHtml from "@/components/SubHtml.vue";
const props = defineProps<{
  src: string;
  time: string;
  attrKey: string;
}>();

const title = computed(() => {
  if (props.attrKey === "a.md") return "Answer";
  if (props.attrKey === "q.md") return "Question";
  return props.attrKey;
});

const html = ref<string | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

async function loadHtml(src: string) {
  const base = import.meta.env.BASE_URL;
  fetch(base + src)
    .then((x) => x.text())
    .then((x) => (html.value = x))
    .catch((e) => {
      error.value = e instanceof Error ? e.message : String(e);
      html.value = null;
    })
    .finally(() => {
      loading.value = false;
    });
}

onMounted(() => {
  loadHtml(props.src);
});

watch(
  () => props.src,
  (s) => loadHtml(s),
);
</script>

<template>
  <div style="margin-bottom: 12px">
    <div class="subhtml-header">
      <h3 class="text-subtitle-1">{{ title }}</h3>
      <div class="text-caption" style="opacity: 0.7">
        Last modified: {{ time }}
      </div>
    </div>
    <div
      v-if="loading"
      class="text-caption"
      style="opacity: 0.7; padding: 8px 0"
    >
      Loading…
    </div>
    <div
      v-else-if="error"
      class="text-caption"
      style="opacity: 0.7; color: var(--error); padding: 8px 0"
    >
      {{ error }}
    </div>
    <SubHtml v-else :html="html ?? ''" />
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
