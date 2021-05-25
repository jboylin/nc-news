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

export const fetchComments = (article_id) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}/comments`)
    .then((response) => response.data.comments);
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}`)
    .then((response) => response.data.article);
};

export const fetchUsers = () => {
  return axios.get(`${BASE_URL}users`).then((response) => response.data.users);
};
