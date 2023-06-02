import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true,
});

export const userAPI = {
    getAlluser(userName?: string | null) {
        return instance.get(`users${userName ? `?name=${userName}` : ''}`);
    }
};