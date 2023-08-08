import { useState, useEffect } from "react";
import axios from "axios";
import millify from "millify";
import { useGetCryptoCoinsQuery } from "../../store/cryptoCoinsApi";

export default function Stats() {
	const { data, error } = useGetCryptoCoinsQuery(30);
	console.log(data);
	console.log(error);
	const cryptoStats = data?.data?.stats;
	return (
		<div>
			<h3
				className="pl-2 mt-4 mb-4 main-color fs-4"
				style={{
					fontFamily: "monospace",
					fontWeight: "bold",
				}}
			>
				Global Crypto Status
			</h3>
			<div className="container p-2">
				<div className="row row-cols-2">
					<div>
						<h6 className="my-font-color mb-2 fw-normal ">
							Total Crytocurrencies
						</h6>
						<h6
							className="fs-4 fw-normal fw-normal"
							style={{ marginBottom: "40px" }}
						>
							{millify(cryptoStats?.total)}
						</h6>
					</div>
					<div>
						<h6 className="my-font-color mb-2 fw-normal ">Total Exchanges</h6>
						<h6 className="fs-4 fw-normal" style={{ marginBottom: "40px" }}>
							{millify(cryptoStats?.totalExchanges)}
						</h6>
					</div>
					<div>
						<h6 className="my-font-color  mb-2 fw-normal ">
							Total Market Caps
						</h6>
						<h6 className="fs-4  fw-normal" style={{ marginBottom: "40px" }}>
							{millify(cryptoStats?.totalMarketCap)}
						</h6>
					</div>
					<div>
						<h6 className="my-font-color  mb-2 fw-normal ">Total 24h volume</h6>
						<h6 className="fs-4  fw-normal" style={{ marginBottom: "40px" }}>
							{millify(cryptoStats?.total24hVolume)}
						</h6>
					</div>
					<div>
						<h6 className="my-font-color  mb-2 fw-normal ">Total Markets</h6>
						<h6 className="fs-4 fw-normal">
							{millify(cryptoStats?.totalMarkets)}
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
}
