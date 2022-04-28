import { api } from "./api";

export const fetchTrandingMovies = async () => {
  const res = await api.get(
    `/trending/all/day?language=ru-RU&include_adult=true&page=1`
  );
  //   console.log(res);
  return res.data.results;
};

export const fetchAllMovies = async (page) => {
  const res = await api.get(
    `/discover/movie?language=ru-RU&sort_by=popularity.desc&include_adult=true&page=${page}`
  );
  //   console.log(res);
  return res.data;
};

export const fetchMovie = async (id) => {
  const res = await api.get(`/movie/${id}?language=ru-RU`);
  //   console.log(res);
  return res;
};
