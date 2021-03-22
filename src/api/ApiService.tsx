import axios, {AxiosResponse} from "axios";
import {LoginRequestParams} from "../features/authentication/AuthModels";
import {ACCESS_TOKEN, JWT} from "../features/common/Constants";

const BASE_URL = "http://127.0.0.1:9999/api";

const addPath = (path: string): string => `${BASE_URL}${path}`;

const responseToData = (response: AxiosResponse) => response.data;

const createAuthHeader = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  return `${JWT} ${accessToken}`
}

export const authService = {
  userLogin: (loginParams: LoginRequestParams) => {
    return axios.post(addPath('/jwt/create/'), {
      username: loginParams.username,
      password: loginParams.password
    })
      .then(response => response.data)
  }
};

export const profileService = {
  fetchInfo: () => {
    return axios.get(addPath('/users/me'), {
      headers: {
        Authorization: createAuthHeader()
      }
    })
      .then(responseToData);
  }
}

export const snippetService = {
  getAllSnippets: () => {
    return axios.get(addPath('/snippets/'))
      .then(responseToData);
  },
  getSnippetById: (id: number) => {
    return axios.get(addPath(`/snippets/${id}`))
      .then(responseToData);
  }
};

export const categoryService = {
  getAllCategories: () => {
    return axios.get(addPath('/categories/'))
      .then(responseToData);
  },
  addCategory: (name: string) => {
    return axios.post(addPath('/categories/'), {
      name: name
    }, {
      headers: {
        Authorization: createAuthHeader()
      }
    })
      .then(responseToData)
  },
  updateCategory: (id: number, name: string) => {
    return axios.put(addPath(`/categories/${id}/`), {
      name: name
    }, {
      headers: {
        Authorization: createAuthHeader()
      }
    })
      .then(responseToData)
  }
};

export const tagService = {
  getAllTags: () => {
    return axios.get(addPath('/tags/'))
      .then(responseToData);
  }
};
