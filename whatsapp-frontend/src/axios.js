import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone-server-backend.herokuapp.com/",
});

export default instance;

//https://whatsapp-clone-server-backend.herokuapp.com/
//"http://localhost:8080",