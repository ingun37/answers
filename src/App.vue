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
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
function goBack() {}
</script>
