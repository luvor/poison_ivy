<template>
  <div @click="lukashenko" class="udali menya">
    <router-link class="movie-card__link" :to="basename + 'movie/' + movie.id">
      <div class="movie-card">
        <div class="movie-card__poster">
          <img
            :src="
              isMonnlaeSpolaye
                ? 'https://1.bp.blogspot.com/-YHtBrQSz77w/X1icjNjxz_I/AAAAAAAAZJU/uOzyiRvzGa8zcm0fx5RPCY7pMTSfnArvgCLcBGAsYHQ/s1600/sailor-moon.jpg'
                : 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            "
            alt="movie poster"
          />
        </div>
        <div class="movie-card__info">
          <h2 class="movie-card__title">{{ movie.title || movie.name }}</h2>
          <p class="movie-card__year">{{ movie.release_date }}</p>
          <p v-if="movie.adult" class="movie-card__adult">18+</p>
          <p class="movie-card__description">{{ movie.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { BASENAME } from "../services/api";
export default {
  name: "MovieCard",
  props: ["movie"],
  data() {
    return {
      basename: BASENAME,
      isMonnlaeSpolaye: true,
    };
  },
  methods: {
    lukashenko() {
      window.location.href = "https://www.youtube.com/watch?v=rXBCtSlKkFw";
    },
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
  border: 1px solid;
  padding: var(--pad);
  margin: 20px 0;
  max-width: 100vw;
  overflow: hidden;
  break-inside: avoid;
  page-break-inside: avoid;
  color: var(--prim);
  text-align: center;
  &:hover {
    color: var(--sec);
  }
  &__link {
    text-decoration: none;
  }
  &__poster {
    img {
      max-width: 100%;
    }
  }
  &__adult {
    padding: 5px 10px;
    border-radius: 5px;
    background: var(--prim);
  }
  &__info {
    padding: 10px;
  }
}
</style>
