import axios from "axios";

const instance = axios.create({
    baseURL : "https://firestore.googleapis.com/v1/projects/vuejshttp-b5634/databases/(default)/documents"
});

export default instance;