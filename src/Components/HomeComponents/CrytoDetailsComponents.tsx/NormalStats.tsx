import millify from "millify";

export default function NormalStats({ coin }: any) {
	return (
		<div className="px-md-3 py-3">
			<div className="row py-3 border-bottom">
				<h6 className="col-6" style={{ fontSize: "17px" }}>
					<i className="bi bi-currency-dollar"></i> Price to USD
				</h6>
				<h6 className="col-6 text-end fw-bold" style={{ fontSize: "17px" }}>
					{`${millify(coin.price)}`}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-6" style={{ fontSize: "17px" }}>
					<i className="bi bi-arrow-up-right-circle"></i> Rank
				</h6>
				<h6 className="col-6 text-end fw-bold" style={{ fontSize: "17px" }}>
					{coin.rank}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-6" style={{ fontSize: "17px" }}>
					<i className="bi bi-lightning-charge"></i> 24h Volume
				</h6>
				<h6 className="col-6 text-end fw-bold" style={{ fontSize: "17px" }}>
					{/* {millify(coin.volume)} */}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-6" style={{ fontSize: "17px" }}>
					<i className="bi bi-currency-dollar"></i> Market Cap
				</h6>
				<h6 className="col-6 text-end fw-bold" style={{ fontSize: "17px" }}>
					{` $${millify(coin.marketCap)}`}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-8" style={{ fontSize: "17px" }}>
					<i className="bi bi-trophy"></i> Al-time-high(daily avg.)
				</h6>
				<h6 className="col-4 text-end fw-bold" style={{ fontSize: "17px" }}>
					{`$ ${millify(coin.allTimeHigh.price)}`}
				</h6>
			</div>
		</div>
	);
}
