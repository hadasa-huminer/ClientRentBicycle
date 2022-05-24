import axios from 'axios'
let Http = axios.create({
    baseURL: 'http://localhost:4500',
    credentials: 'include',
    headers: {
        'content-type': 'application/json',
    },
});

export default Http
