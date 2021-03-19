import axios from "axios";

const BASE_URL = "http://127.0.0.1:9999/api";


export const snippetService = {
  getAllSnippets: () => {
    return axios.get(`${BASE_URL}/snippets/`)
      .then(response => response.data);
  },
  getSnippetById: (id: number) => {
    return axios.get(`${BASE_URL}/snippets/${id}`)
      .then(response => response.data);
  }
};

export const categoryService = {
  getAllCategories: () => {
    return axios.get(`${BASE_URL}/categories/`)
      .then(response => response.data);
  }
};

export const tagService = {
  getAllTags: () => {
    return axios.get(`${BASE_URL}/tags/`)
      .then(response => response.data);
  }
};
