<script setup lang="ts">
import { computed, ref } from "vue";
import Recursive from "./Recursive.vue";
import type { Page } from "@/types.ts";
import SubHtml from "@/components/SubHtml.vue";

const props = defineProps<{
  page: Page;
}>();

// Track expanded panels. Using `multiple` so it can be an array of values.
const panels = ref<string[]>([]);

function isExpanded(val: string) {
  return Array.isArray(panels.value)
    ? panels.value.includes(val)
    : panels.value === (val as unknown);
}

// Prepare attributes:
// - normalAttrs: shown inline with small fonts
// - mdAttrs: collected for later, keys ending with ".md"
const entries = computed(() =>
  Object.entries(props.page._pageContent._attributes),
);
type AttrItem = { key: string; content: string };

function removeExt(s: string) {
  return s.replace(/\.[^/.]+$/, "");
}
const normalAttrs = computed<AttrItem[]>(() =>
  entries.value
    .filter(([k]) => !k.endsWith(".md"))
    .map(([key, v]) => ({
      key: removeExt(key),
      content: v._attributeFile._content,
    })),
);

type SubHtmlAttr = { key: string; time: string };
const subHtmlAttrs = computed<SubHtmlAttr[]>(() =>
  entries.value
    .filter(([k]) => k.endsWith(".md"))
    .map(([key, v]) => ({ key, time: v._time })),
);
</script>

<template>
  <div>
    <h1>{{ page._pageContent._pageTitle }}</h1>
    <div class="text-caption" style="margin-bottom: 12px">
      <v-chip-group column>
        <v-chip
          v-for="item in normalAttrs"
          :key="item.key"
          density="compact"
          variant="text"
          class="text-caption"
        >
          <strong>{{ item.key }}:</strong>&nbsp;{{ item.content }}
        </v-chip>
      </v-chip-group>
    </div>

    <!-- Render SubHtml blocks for *.md attributes (now mapped to .html files) -->
    <div v-if="subHtmlAttrs.length" style="margin-bottom: 16px">
      <SubHtml
        v-for="attr in subHtmlAttrs"
        :key="attr.key"
        :attr-key="attr.key"
        :src="`/resources/${page._pageContent._hash}/${attr.key}.html`"
        :time="attr.time"
      />
    </div>

    <v-expansion-panels v-model="panels" multiple>
      <v-expansion-panel
        v-for="child in page._childPageContents"
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
