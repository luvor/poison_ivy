<template>
  <router-link class="movie-card__link" :to="basename + 'movie/' + movie.id">
    <div class="movie-card">
      <div class="movie-card__poster">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="movie poster"
        />
      </div>
      <div class="movie-card__info">
        <h2 class="movie-card__title">{{ movie.title }}</h2>
        <p class="movie-card__year">{{ movie.year }}</p>
        <p class="movie-card__description">{{ movie.description }}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
import { BASENAME } from "../services/api";
export default {
  name: "MovieCard",
  props: ["movie"],
  data() {
    return {
      basename: BASENAME,
    };
  },
};
</script>
<style lang="scss">
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--rad);
  border: 1px solid var(--prim);
  padding: var(--pad);
  margin: 20px 0;
  max-width: 100vw;
  overflow: hidden;
  break-inside: avoid;
  page-break-inside: avoid;
  color: var(--prim);
  &__link {
    text-decoration: none;
  }
  &__poster {
    img {
      max-width: 100%;
    }
  }
}
</style>
