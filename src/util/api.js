import axios from "axios";

const BASE_URL = "https://boylins-nc-news.herokuapp.com/api/";

export const fetchArticles = (slug) => {
  return axios
    .get(`${BASE_URL}articles`, {
      params: {
        topic: slug,
      },
    })
    .then((response) => response.data.articles);
};

export const fetchTopics = () => {
  return axios
    .get(`${BASE_URL}topics`)
    .then((response) => response.data.topics);
};

// export const fetchComments = () => {
//   return axios.get(`${BASE_URL}${article_id}`).then(response);
// };

export const fetchArticleById = (article_id) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}`)
    .then((response) => response.data.article);
};
