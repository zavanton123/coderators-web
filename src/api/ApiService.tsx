import axios, {AxiosResponse} from "axios";
import {LoginRequestParams} from "../features/authentication/AuthModels";
import {ACCESS_TOKEN, JWT} from "../features/common/Constants";

const BASE_URL = "http://127.0.0.1:9999/api";

const responseToData = (response: AxiosResponse) => response.data

export const authService = {
  userLogin: (loginParams: LoginRequestParams) => {
    return axios.post(`${BASE_URL}/jwt/create/`, {
      username: loginParams.username,
      password: loginParams.password
    })
      .then(response => response.data)
  }
};

export const profileService = {
  fetchInfo: () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    return axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `${JWT} ${accessToken}`
      }
    })
      .then(responseToData);
  }
}

export const snippetService = {
  getAllSnippets: () => {
    return axios.get(`${BASE_URL}/snippets/`)
      .then(responseToData);
  },
  getSnippetById: (id: number) => {
    return axios.get(`${BASE_URL}/snippets/${id}`)
      .then(responseToData);
  }
};

export const categoryService = {
  getAllCategories: () => {
    return axios.get(`${BASE_URL}/categories/`)
      .then(responseToData);
  }
};

export const tagService = {
  getAllTags: () => {
    return axios.get(`${BASE_URL}/tags/`)
      .then(responseToData);
  }
};
