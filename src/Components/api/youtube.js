import axios from 'axios';

const APIKey = 'AIzaSyCL_AhizU2M9WI8IytlIon6rCZosc-8TQk';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: APIKey
    },
    headers: {}
});