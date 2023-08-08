import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";
const CryptoCoinsApiHeader = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "1961f0469cmshdec333deecb0794p13f11ajsn6d1ce7fd5d89",
};
const createRequest = (url: String): any => ({
	url,
	headers: CryptoCoinsApiHeader,
});

export const cryptoCoinsApi = createApi({
	reducerPath: "cryptoCoinsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoCoins: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoCoinsDetails: builder.query({
			query: (id) => createRequest(`/coin/${id}`),
		}),
		getCryptoCoinsHistory: builder.query({
			query: ({ id, timeperiod }): string =>
				createRequest(`/coin/${id}/history?timePeriod=${timeperiod}`),
		}),
		getCryptoExchanges: builder.query<any, void>({
			query: (): string => createRequest(`coin/Qwsogvtv82FCd/exchanges`),
		}),
	}),
});
export const {
	useGetCryptoCoinsQuery,
	useGetCryptoCoinsDetailsQuery,
	useGetCryptoCoinsHistoryQuery,
	useGetCryptoExchangesQuery,
} = cryptoCoinsApi;
