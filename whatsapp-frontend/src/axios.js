import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

export default instance;

//https://whatsapp-rest-server.herokuapp.com/
