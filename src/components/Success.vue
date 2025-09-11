<script setup lang="ts">
import { ref } from "vue";
import Recursive from "./Recursive.vue";
import type { Page } from "@/types.ts";

const props = defineProps<{
  value: Page;
}>();

// Track expanded panels. Using `multiple` so it can be an array of values.
const panels = ref<string[]>([]);

function isExpanded(val: string) {
  return Array.isArray(panels.value)
    ? panels.value.includes(val)
    : panels.value === (val as unknown);
}
</script>

<template>
  <div>
    <h1>{{ value._pageContent._pageTitle }}</h1>

    <v-expansion-panels v-model="panels" multiple>
      <v-expansion-panel
        v-for="child in value._childPageContents"
        :key="child._hash"
        :value="child._hash"
      >
        <v-expansion-panel-title>
          {{ child._pageTitle }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <Recursive v-if="isExpanded(child._hash)" :sha1="child._hash" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped></style>
