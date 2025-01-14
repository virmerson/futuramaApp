<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchMovies } from "../service/api";
import MovieSynopsis from "./MovieSynopsis.vue"

const movies = ref([]);
const error = ref<string | null>(null);
onMounted(async () => {
  try {
    movies.value = await fetchMovies();
  } catch (error) {
    console.error(error)
    throw error;
  }

});
</script>

<template>
  <div>
    <h1>I'm the list of movies</h1>
    <div v-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="m in movies">
        <MovieSynopsis :movie="m"></MovieSynopsis>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
