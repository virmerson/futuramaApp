<script setup lang="ts">
import { Movie } from "../types/Movie";
defineProps<{ movie: Movie }>();
</script>

<template>
  <div class="synopsis-container  ">
    <div class="synopsis-text">
     {{ movie.synopsis }}
    </div>
   
      <div class="synopsis-info">

        <p><strong>Years Aired:</strong> {{ movie.yearsAired }}</p>
        <p><strong>Creators:</strong></p>
        
      <ul>
        <li v-for="creator in movie.creators" :key="creator.name">
          <a :href="creator.url"> {{ creator.name }}</a>
        </li>
      </ul>
    </div>
</div>
</template>

<style scoped>


.synopsis-container {
  display: flex;
  border:10px solid black;
  justify-content: space-between;
  flex-wrap:wrap;

  padding:2em;
  margin:1em 0;
  border:1px solid #ccc;
  border-radius:8px;
  box-shadow:0 2px 12px rgb(218, 194, 9)

}
.synopsis-text{
  flex:1 1 50%;
  text-align:justify;
  margin-right:1em;
  background-color:rgba(24, 23, 23, 0.53);
  
}
.synopsis-info{
  flex:1;
  text-align:left;
}
</style>
