import axios from "axios";

const BASE_URL = "http://127.0.0.1:9999/api";


export const snippetService = {
  getAllSnippets: () => {
    return axios.get(`${BASE_URL}/snippets/`)
  }
};

export const categoryService = {
  getAllCategories: () => {
    return axios.get(`${BASE_URL}/categories/`)
  }
};

export const tagService = {
  getAllTags: () => {
    return axios.get(`${BASE_URL}/tags/`)
      .then(response => {
        return response.data;
      })
  }
};
