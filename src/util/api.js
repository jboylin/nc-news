import axios from "axios";

const BASE_URL = "https://boylins-nc-news.herokuapp.com/api/";

export const fetchArticles = (slug, order, sort) => {
  return axios
    .get(`${BASE_URL}articles`, {
      params: {
        topic: slug,
        sort_by: sort,
        order: order,
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

export const voteOnType = (type, id, voteObject) => {
  return axios
    .patch(`${BASE_URL}${type}/${id}`, voteObject)
    .then((response) => response);
};

export const postCommentOnArticle = (article_id, commentObject) => {
  return axios
    .post(`${BASE_URL}articles/${article_id}/comments`, commentObject)
    .then((response) => response.data);
};

export const deleteById = (type, id) => {
  return axios.delete(`${BASE_URL}${type}/${id}`).then((response) => response);
};

export const fetchUserByUsername = (username) => {
  return axios
    .get(`${BASE_URL}users/${username}`)
    .then((response) => response.data.user);
};
