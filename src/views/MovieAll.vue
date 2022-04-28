<template>
  <div class="all-movies">
    <h2>All movies</h2>
    <div class="all-movies__movies">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <div class="all-movies__pagination">
      <button v-if="page > 1" @click="fetchMovies(page - 1)">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
          ></path>
        </svg>
        Назад
      </button>
      <button v-if="page < pages" @click="fetchMovies(page + 1)">
        Дальше
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.all-movies {
  padding: 20px;
  &__movies {
    column-count: 4;
  }
  &__pagination {
    color: var(--light);
    display: flex;
    justify-content: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      margin: 10px;
      font-size: 16px;
      border-radius: var(--rad);
      border: none;
      background: var(--prim);
      cursor: pointer;
      &:hover {
        background: var(--sec);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .all-movies {
    &__movies {
      column-count: 2;
    }
  }
}
@media screen and (max-width: 540px) {
  .all-movies {
    &__movies {
      column-count: 1;
    }
  }
}
</style>
<script>
import { fetchAllMovies } from "../services/movie";
import MovieCard from "../components/MovieCard.vue";
export default {
  name: "MovieAll",
  data() {
    return {
      movies: [],
      page: 1,
      pages: 1,
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    async fetchMovies(page) {
      const res = await fetchAllMovies(page);
      this.movies = res.results;
      this.pages = res.total_pages;
      this.page = res.page;
      // console.log(res);
    },
  },
  mounted() {
    this.fetchMovies(this.page);
  },
};
</script>
