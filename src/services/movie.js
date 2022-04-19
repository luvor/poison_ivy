import { api } from "./api";

export const fetchRandomMovies = async () => {
  const res = await api.get(
    `/discover/movie?language=ru-RU&sort_by=popularity.desc&include_adult=true&page=1`
  );
  console.log(res);
  return res.data.results;
};

export const fetchMovie = async (id) => {
  const res = await api.get(`/movie/${id}?language=ru-RU`);
  console.log(res);
  return res;
};
