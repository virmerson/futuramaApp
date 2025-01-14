<script setup lang="ts">

import {Movie} from '../types/Movie'
defineProps<{ movie: Movie} >()

</script>

<template>
 <div>
  <h2>{{movie.title}}</h2>
  <p>{{movie.synopsis}}</p>
  <p><strong>Years Aired:</strong> {{movie.yearsAired}}</p>
  <p><strong>Creators:</strong></p>
  <ul>
    <li v-for="creator in movie.creators" :key="creator.name"> 
      <a :href="creator.url"> {{creator.name}}</a>
    </li>
  </ul>
 </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
