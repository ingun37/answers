<script setup lang="ts">
// This component is shown inside a v-dialog from the app bar "About" button.
// Keep it presentational so the parent controls opening/closing.

const emit = defineEmits<{
  (e: "close"): void;
}>();

function handleSwipeDown() {
  emit("close");
}
function handleSwipeRight() {
  emit("close");
}
</script>

<template>
  <v-card
    elevation="2"
    v-touch="{
      down: handleSwipeDown,
      right: handleSwipeRight,
    }"
  >
    <v-card-text class="pt-4">
      <div class="d-flex justify-center mb-4">
        <v-avatar size="96">
          <v-img src="@/assets/profile.JPG" alt="Profile picture" cover />
        </v-avatar>
      </div>

      <p>
        My name is Ingun, and this is where I share my solutions to math and
        science problems from various textbooks.
      </p>

      <p>
        It's a collection of my humble thoughts and solutions, not perfect
        answers. All corrections and feedback are welcome. You can submit an
        Issue or Pull Request on my
        <a
          href="https://github.com/ingun37/answers-db"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub repo</a
        >
        which serves as a database of this website.
      </p>

      <h3 class="text-subtitle-1 mt-4 mb-2">Find me online</h3>
      <div class="d-flex flex-wrap ga-2">
        <v-btn
          prepend-icon="mdi-github"
          variant="tonal"
          color="primary"
          href="https://github.com/ingun37"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </v-btn>
        <v-btn
          prepend-icon="mdi-web"
          variant="tonal"
          color="primary"
          href="https://ingun37.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </v-btn>
        <v-btn
          prepend-icon="mdi-instagram"
          variant="tonal"
          color="primary"
          href="https://instagram.com/ingun37"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
ul {
  margin: 0;
}
</style>
