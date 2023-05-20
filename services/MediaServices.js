import { API_URL_MOVIE_ALL, API_URL_TV_ALL, API_KEY } from "env";

export const getAllMedia = async (mediaType) => {
    try {
        let apiUrl = mediaType === 'movie' ? API_URL_MOVIE_ALL : API_URL_TV_ALL;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return { data, mediaType };
    } catch (error) {
        console.log(error);
    }
};

export const fetchMediaDetails = async (mediaType, mediaId) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${API_KEY}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getTopRatedMedia = async (mediaType) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${API_KEY}`
        );
        const data = await response.json();
        return { data, mediaType };
    } catch (error) {
        console.log(error);
    }
};

export const getLatestMedia = async (mediaType) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/${mediaType}/latest?api_key=${API_KEY}`
        );
        const data = await response.json();
        return { data, mediaType };
    } catch (error) {
        console.log(error);
    }
};