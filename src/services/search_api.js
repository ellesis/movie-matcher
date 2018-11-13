import axios from 'axios';

export function getMovie(url, callback){
  console.log("getMovie" + url)
  // axios.get("https://yts.am/api/v2/" + url)
  //   .then((response) => {
  //     console.log(response.data.data.movies)
  //     return response.data.data.movies
  //   }) 

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
