import RingLoader from "react-spinners/RingLoader";
import { useGetCryptoNewsQuery } from "../store/cryptoNewsApi";
import LatestCryptosNews from "./HomeComponents/LatestCryptosNews";

export default function News() {
	const { isLoading, error } = useGetCryptoNewsQuery({
		newsCategory: "cryptocurrencies",
		count: 100,
	}) as { isLoading: any; error: any };
	if (error)
		return (
			<div
				className="col side-padding vh-100"
				style={{ backgroundColor: "#f0f2f5" }}
			>
				<h1 className="fs-2">{error.data.message}</h1>
				<h1 className="fs-2">Try to change IP using VPN</h1>
			</div>
		);
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
			className="col side-padding ps-4"
			style={{ backgroundColor: "#f0f2f5" }}
		>
			<LatestCryptosNews />
		</div>
	);
}
