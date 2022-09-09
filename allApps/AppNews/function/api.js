import axios from "axios";

// Url de mon api
// const urlApi = 'https://newsapi.org/v2/everything';
// Clé de mon api
// const apiKey = 'f57e50c8398045eab8e7a7b34e58a8bd';

// Url de mon api
const urlApi = ' https://gnews.io/api/v4/search';
// Clé de mon api
const apiKey = 'dff9a0f92ef5b4f8b1ed1b9b3a97086a';

export const apiNews = async (page) => {

// Paramètres de mon api
    const params = {

        q: 'Martinique',
        lang: 'fr',
        from: '2022-08-25',
        sortBy: 'popularity',
        token: apiKey,
        page: page,
        max: 10
    };

    const {data} = await axios.get(urlApi,{params:params})

   console.log("api News", data.articles)

    return data.articles
 };