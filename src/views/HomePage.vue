<template>
  <div class="homepage">
    <h1 class="homepage__title">В тренде</h1>
    <div v-if="movies" class="homepage__movies">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <div v-if="movies.length < 1">
      <Loader />
    </div>
  </div>
</template>
<script>
import MovieCard from "../components/MovieCard.vue";
import Loader from "../components/Loader.vue";
import { fetchTrandingMovies } from "../services/movie";
export default {
  name: "Homepage",
  data() {
    return {
      movies: [],
    };
  },
  components: {
    MovieCard,
    Loader,
  },
  methods: {
    async fetchMovies() {
      const movies = await fetchTrandingMovies();
      this.movies = movies;
      //   console.log(this.movies);
    },
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>
<style lang="scss">
.homepage {
  &__title {
    color: var(--prim);
    text-align: center;
  }
  &__movies {
    padding: 20px;
    column-count: 4;
  }
}
@media screen and (max-width: 768px) {
  .homepage {
    &__movies {
      column-count: 2;
    }
  }
}
@media screen and (max-width: 540px) {
  .homepage {
    &__movies {
      column-count: 1;
    }
  }
}
</style>
