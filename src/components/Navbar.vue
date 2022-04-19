<template>
  <nav class="menu">
    <div class="menu__logo">
      <router-link to="/">
        <img src="movie.png" alt="logo" />
        Poison&nbsp;Ivy
      </router-link>
    </div>
    <div class="menu__items">
      <router-link to="/">Главная 🏠</router-link>
      <router-link to="/movie/all">Все фильмы 📺</router-link>
    </div>
  </nav>
</template>
<style lang="scss">
.menu {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 1px solid var(--prim);
  &__logo a {
    display: flex;
    align-items: center;
    width: 48px;
    color: #ff9800;
    text-decoration: none;
    font-weight: 400;
    /* text-transform: uppercase; */
    text-indent: 10px;
    font-size: x-large;
    img {
      max-width: 100%;
    }
  }
  &__items {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--prim);
      font-size: 18px;
      font-weight: 700;
      padding: 10px 20px;
      transition: 300ms;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      &:hover {
        color: var(--sec);
        border-color: var(--sec);
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .menu {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    &__logo a {
      flex-direction: column;
    }
    &__items {
      flex-direction: column;
    }
  }
}
</style>
