<template>
  <div class="homepage">
    <h1>Hello</h1>
    <div class="homepage__movies">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
<script>
import MovieCard from "../components/MovieCard.vue";
import { fetchRandomMovies } from "../services/movie";
export default {
  name: "Homepage",
  data() {
    return {
      movies: [],
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    async fetchMovies() {
      const movies = await fetchRandomMovies();
      this.movies = movies;
      console.log(this.movies);
    },
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>
<style lang="scss">
.homepage {
  &__movies {
    padding: 20px;
    column-count: 4;
  }
}
</style>
