import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "7c5e82654emshddc44117627a851p1f2ce1jsn0ef315a4be0f"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: ()=> "/charts/track" }),
    getSongsByGenre: builder.query({query: (genre)=>`/charts/genre-world?genre_code=${genre}`}),
    getSongDetails: builder.query({query: ({songid})=> `/songs/get-details?key=${songid}`}),
    getSongRelated : builder.query({query: ({songid})=> `/songs/list-recommendations?key=${songid}`}),
    getArtistDetails : builder.query({query: (id)=>`/artists/get-details?id=${id}`}),
    getSongsByCountry : builder.query({query : (countryCode)=>`/charts/country?country_code=${countryCode}`}),
    getSongsBySearch : builder.query({query: (searchTerm)=>`/search?term=${searchTerm}`})
  }),
});


export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi