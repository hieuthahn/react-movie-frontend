const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "3149f2c8b0a36dab13fef9fd0f1bb5c4",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
