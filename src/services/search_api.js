import axios from 'axios';

export function getMovie(url, callback){
  console.log("<<<getMovie>>>" + url)
  fetch("https://yts.am/api/v2/" + url)
  .then(response => response.json())
  .then(json => {
    console.log(json.data.movies)
    if (json.data.movies === undefined) {
      callback([])
    } else {
      callback(json.data.movies)
    }    
  })
  .catch(err => console.log(err))
}

export async function getMovieAxios(url){
  console.log("<<<getMovieAxios>>>" + url)
  //return axios.get("https://yts.am/api/v2/" + url)

  await axios.get("https://yts.am/api/v2/" + url)
  .then( (response)=>{
    console.log("<<<getMovieAxios-res>>>")
    console.log(response.data.data.movies)
    return  response.data.data.movies
  })
}
