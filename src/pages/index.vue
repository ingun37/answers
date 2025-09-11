<template>
  <Root :sha1="sha1" />
</template>

<script lang="ts" setup>
// Accept sha1 from App.vue and forward it to Root
const props = defineProps<{
  sha1: string;
}>();
const { sha1 } = props;
</script>
