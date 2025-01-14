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
    <h1>Futurama</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="m in movies" :key="m.id" class="card">
        <MovieSynopsis :movie="m"></MovieSynopsis>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
