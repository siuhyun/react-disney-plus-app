import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key: "3ac0b39f9d4a20ea17dec41c4ef5309d",
    language: "ko-KR"
  }
})

export default instance;