import axios from 'axios';

const APIKey = '';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: APIKey
    },
    headers: {}
});