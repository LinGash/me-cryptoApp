import { Top10Cryptos } from "./HomeComponents/Top10Cryptos";

export default function Cryptocurrencies() {
	return (
		<div
			className="col side-padding"
			style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}
		>
			<Top10Cryptos />
		</div>
	);
}
