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
      <!-- Pass sha1 as a prop to the routed component -->
      <router-view v-slot="{ Component }">
        <component :is="Component" :sha1="sha1" />
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

function goBack() {}

const DEFAULT_SHA1 = "2aed5404c83f7a46aa249e0a6328af756b19d513";

const route = useRoute();
const sha1 = computed<string>(() => {
  const q = route.query.sha1;
  if (Array.isArray(q)) {
    const v = q[0]?.trim() ?? "";
    return v ? v : DEFAULT_SHA1;
  } else {
    const v = typeof q === "string" ? q.trim() : "";
    return v ? v : DEFAULT_SHA1;
  }
});
</script>
