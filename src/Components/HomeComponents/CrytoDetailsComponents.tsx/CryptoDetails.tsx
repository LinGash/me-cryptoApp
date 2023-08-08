import { useState } from "react";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import {
	useGetCryptoCoinsDetailsQuery,
	useGetCryptoCoinsHistoryQuery,
} from "../../../store/cryptoCoinsApi";
import Chart from "./Chart";
import NormalStats from "./NormalStats";
import OtherStats from "./OtherStats";

export default function CryptoDetails() {
	const [timeperiod, setTimeperiod] = useState("7d");
	const { id } = useParams();
	const { data, error, isLoading } = useGetCryptoCoinsDetailsQuery(id);
	const time = ["24h", "7d", "30d", "1y", "5y"];
	const { data: coinHistory, error: coinHistoryError } =
		useGetCryptoCoinsHistoryQuery({
			id,
			timeperiod,
		});
	console.log(coinHistory);
	console.log(coinHistoryError);
	console.log(data);
	const coin = data?.data?.coin;
	const override = `
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 35vh;
	`;
	if (isLoading)
		return (
			<div
				className="col vh-100 side-padding"
				style={{ backgroundColor: "#f0f2f5" }}
			>
				<RingLoader color="brown" size={70} css={override} />
			</div>
		);
	window.scrollTo(0, 0);
	return (
		<div className="col side-padding" style={{ backgroundColor: "#f0f2f5" }}>
			<div className="pb-5 pt-3 border-bottom">
				<h3 className="text-center pt-5 crypto-detail-color">{`${coin.name} (${coin.symbol}) Price`}</h3>
				<h6 className="text-center pt-3">{`${coin.name} live price in US Dollar (USD). View value statistics, market cap and supply`}</h6>
			</div>
			<div className="px-3 px-md-5">
				<select
					onChange={(e) => setTimeperiod(e.currentTarget.value)}
					className="form-select"
					aria-label="Default select example"
					style={{ maxWidth: "200px" }}
				>
					{time.map((t) => {
						return (
							<option selected={t === "7d" ? true : false} key={t} value={t}>
								{t}
							</option>
						);
					})}
				</select>
			</div>
			<Chart
				coinHistory={coinHistory}
				coinName={coin.name}
				coinPrice={coin.price}
			/>
			<div className="row row-cols-1 row-cols-md-2">
				<div className="col px-3 px-md-5">
					<h4 className="crypto-detail-color pt-4 fw-bold">{`${coin.name} Value Statistics`}</h4>
					<h6 className="pt-2">
						{`An overview showing the statistics of ${coin.name}, such as the base and
						quote currency, the rank, and trading volume.`}
					</h6>
					<NormalStats coin={coin} />
					<h4 className="crypto-detail-color pt-4">What is {coin.name}?</h4>
					{parse(coin.description)}
				</div>
				<div className="col px-3 px-md-5">
					<h4 className="crypto-detail-color pt-4 fw-bold">Other Stats Info</h4>
					<h6 className="pt-2">
						An overview showing the statistics of Bitcoin, such as the base and
						quote currency, the rank, and trading volume.
					</h6>
					<OtherStats coin={coin} />
					<h4 className="crypto-detail-color pt-4">{coin.name} Links</h4>
					{coin?.links.map((link: any) => {
						return (
							<div key={link.url} className="row py-3 border-bottom">
								<h6 className="col-5" style={{ fontSize: "17px" }}>
									{link.type}
								</h6>
								<a
									href={link.url}
									className="col-7 text-end fw-bold text-decoration-none crypto-detail-color"
									style={{ fontSize: "17px" }}
								>
									{link.name}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
