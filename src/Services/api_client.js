/* eslint-disable no-template-curly-in-string */
// import axios from 'axios';
// export async function getSongs(artistName) {
//     const URL = 'https://itunes.apple.com/search?term=${artistName}&limit=25';
//     const response = await axios.get(URL)
//     console.log(response.data['result']);
//     return response.data['result'];

import axios from "axios";

// }
export async function getSongs(termName) {
  // by using the parameter we change the url link as artist name or  latest songs
  const URL = `https://itunes.apple.com/search?term=${termName}&limit=40`;
  const response = await axios.get(URL);
  console.log(response.data["results"]);
  return response.data["results"];
}
