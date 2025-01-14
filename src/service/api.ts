import axios from 'axios';
const API_URL = 'https://api.sampleapis.com/futurama/info';

export const fetchMovies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    }catch (error) {
        console.error('Error fetching movies', error);
        throw error;
    }
}