<script setup lang="ts">
import { ref, watch } from "vue";
import Success from "./Success.vue";
import { decodePage, type Page, type PageContent } from "@/types.ts";

const props = defineProps<{
  sha1: string;
}>();

const value = ref<Page | null>(null);
const failed = ref(false);

async function load(sha1: string) {
  value.value = null;
  failed.value = false;
  return fetch(`/pages/${encodeURIComponent(sha1)}.json`, {
    headers: { Accept: "application/json" },
  })
    .then((x) => x.json())
    .then(decodePage)
    .then((page) => {
      emit("loaded", page);
      value.value = page;
    })
    .catch(() => {
      failed.value = true;
    });
}
const emit = defineEmits<{
  (e: "expand-child", child: PageContent): void;
  (e: "loaded", page: Page): void;
}>();

watch(
  () => props.sha1,
  (newSha1) => {
    if (newSha1 && newSha1.trim().length > 0) {
      load(newSha1.trim());
    } else {
      failed.value = true;
      value.value = null;
    }
  },
  { immediate: true },
);
</script>

<template>
  <Success
    v-if="value !== null"
    :page="value"
    @expand-child="(e) => emit('expand-child', e)"
  />
  <p v-else-if="failed">Failed to load page.</p>
</template>

<style scoped>
p {
  color: #b00020;
}
</style>
