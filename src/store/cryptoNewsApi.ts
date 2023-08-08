import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
	"x-bingapis-sdk": "true",
	"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
	"x-rapidapi-key": "862fe5eee4msh4f69d4951f0325bp18c862jsn6a20f715a632",
};

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://bing-news-search1.p.rapidapi.com",
	}),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
