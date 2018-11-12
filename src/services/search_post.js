import axios from 'axios';

export function getMoveibyKeyward(keyWard){
  return axios.get("https://yts.am/api/v2/list_movies.json?query_term=" + keyWard)
}