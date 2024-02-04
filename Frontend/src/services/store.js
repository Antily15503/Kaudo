import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';

export const store = configureStore({
    reducer: { //grab a portion of the store(our entire app and API) that we need
        [articleApi.reducePath]: articleApi.reducer //reduces the entire store to something we need (aka ArticleApi)
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) //do smth with the state before we get the state (this case do the default setup)
})