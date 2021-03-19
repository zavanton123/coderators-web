import axios from "axios";

const BASE_URL = "http://127.0.0.1:9999/api"


export const snippetService = {
  getAllSnippets: () => {
    return axios.get(`${BASE_URL}/snippets/`)
  }
}
