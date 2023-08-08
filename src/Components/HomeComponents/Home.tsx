import { useState } from "react";
import { Link } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { useGetCryptoCoinsQuery } from "../../store/cryptoCoinsApi";
import LatestCryptosNews from "./LatestCryptosNews";
import Stats from "./Stats";
import { Top10Cryptos } from "./Top10Cryptos";

export default function Home() {
	const { error, isLoading } = useGetCryptoCoinsQuery(30) as {
		error: any;
		isLoading: any;
	};
	if (error) {
		console.log(error.data);
		return (
			<div
				className="col side-padding vh-100"
				style={{ backgroundColor: "#f0f2f5" }}
			>
				<h1 className="text-danger fs-3">Error</h1>
				<h1 className="fs-5">
					={">"}
					{error.data.message}
				</h1>
				<h1 className="fs-5">
					={">"}
					Try to change IP using VPN
				</h1>
			</div>
		);
	}
	const override = `
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 35vh;
	`;
	if (isLoading)
		return (
			<div
				className="col side-padding vh-100"
				style={{ backgroundColor: "#f0f2f5" }}
			>
				<RingLoader color="brown" size={70} css={override} />
			</div>
		);
	return (
		<div
			className="col side-padding px-4"
			style={{ backgroundColor: "#f0f2f5" }}
		>
			<Stats />
			<div className="d-flex flex-row align-items-center justify-content-between pt-5 pb-5 main-color">
				<h3
					className="fs-4"
					style={{
						fontFamily: "monospace",
						fontWeight: "bold",
					}}
				>
					Top15 Cryptos in the world
				</h3>
				<Link
					to="/cryptocurrencies"
					className="text-decoration-none text-black"
				>
					<h5 className="fs-6" style={{ fontFamily: "sans-serif" }}>
						Show more
					</h5>
				</Link>
			</div>
			<Top10Cryptos homeComponentOn />
			<div className="d-flex flex-row align-items-center justify-content-between pt-5 pb-4 main-color">
				<h3
					className="fs-4"
					style={{
						fontFamily: "monospace",
						fontWeight: "bold",
					}}
				>
					Latest Crypto News
				</h3>
				<Link to="/news" className="text-decoration-none text-black">
					<h5 className="fs-6" style={{ fontFamily: "sans-serif" }}>
						Show more
					</h5>
				</Link>
			</div>
			<LatestCryptosNews homeComponentOn />
		</div>
	);
}
