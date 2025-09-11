<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable" flat>
      <v-btn
        icon="mdi-arrow-left"
        variant="text"
        @click="goBack"
        aria-label="Go back"
      />
      <v-toolbar-title>App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Root :sha1="sha1"></Root>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { decodePage } from "@/types.ts";

async function goBack() {
  if (sha1.value === DEFAULT_SHA1) return;
  fetch(`/pages/${sha1.value || DEFAULT_SHA1}.json`)
    .then((x) => x.json())
    .then(decodePage)
    .then((page) => {
      sha1.value = page._parentHash;
      return router.replace({
        query: { ...route.query, sha1: page._parentHash },
      });
    });
}

const DEFAULT_SHA1 = "2aed5404c83f7a46aa249e0a6328af756b19d513";

const route = useRoute();
const router = useRouter();

const sha1 = ref<string>(DEFAULT_SHA1);

function normalizeSha1(q: unknown): string {
  if (Array.isArray(q)) {
    const v = q[0]?.trim() ?? "";
    return v ? v : DEFAULT_SHA1;
  } else {
    const v = typeof q === "string" ? q.trim() : "";
    return v ? v : DEFAULT_SHA1;
  }
}

watch(
  () => route.query.sha1,
  (q) => {
    sha1.value = normalizeSha1(q);
  },
  { immediate: true },
);
</script>
