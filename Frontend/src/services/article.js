//this is one specific part of our global store (the article part)
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY_SUMMARIZER;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ //defining what API we are calling
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => { //sets the keys and host in "headers"
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({ //getting the endpoint for our summaryAPI
        getSummary: builder.query({ //establishing api function getSummary
            query: (params) => 'test'
        })
    })
});