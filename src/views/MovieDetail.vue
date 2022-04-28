<template>
  <div
    v-if="movie"
    class="movie-detail"
    :style="
      'background-image: url(' +
      'https://image.tmdb.org/t/p/original' +
      movie.backdrop_path +
      ')'
    "
  >
    <div class="movie-detail__poster">
      <img
        :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
        :alt="movie.original_title"
      />
    </div>
    <div class="movie-detail__info">
      <h2 class="movie-detail__title">{{ movie.title }}</h2>
      <p class="movie-detail__original_title">{{ movie.original_title }}</p>
      <p class="movie-detail__year">
        <span class="info__label">Дата выпуска:</span> {{ movie.release_date }}
      </p>
      <p class="movie-detail__description">{{ movie.overview }}</p>
      <p class="movie-detail__genres">
        <span class="info__label">Жанры:</span>
        {{ movie.genres.map((i) => i.name).join(", ") }}
      </p>
      <p class="movie-detail__production_countries">
        <span class="info__label">Страны выпуска:</span>
        {{ movie.production_countries.map((i) => i.name).join(", ") }}
      </p>
      <p v-if="movie.budget" class="movie-detail__budget">
        <span class="info__label">Бюджет:</span> ${{ movie.budget }}
      </p>
    </div>
  </div>
</template>
<style lang="scss">
.movie-detail {
  color: var(--prim);
  padding: 20px;
  display: flex;
  align-items: stretch;
  &__poster {
    width: 50vw;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    padding: 10px;
    width: 50%;
    background: rgba($color: #000000, $alpha: 0.4);
  }
  &__title {
    color: var(--light);
  }
}
.info {
  &__label {
    color: var(--light);
  }
}
</style>
<script>
import { fetchMovie } from "../services/movie";

export default {
  name: "MovieDetail",
  data() {
    return {
      movie: null,
    };
  },
  methods: {
    async loadMovie(id) {
      console.log(id);
      const res = await fetchMovie(id);
      this.movie = res.data;
      console.log(this.movie);
    },
  },
  mounted() {
    this.loadMovie(this.$route.params.id);
  },
};
</script>
