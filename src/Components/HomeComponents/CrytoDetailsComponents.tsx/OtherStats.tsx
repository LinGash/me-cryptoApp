import millify from "millify";

export default function OtherStats({ coin }: any) {
	return (
		<div className="px-md-3 py-3">
			<div className="row py-3 border-bottom">
				<h6 className="col-8" style={{ fontSize: "17px" }}>
					<i className="bi bi-bar-chart-line-fill"></i> Number of Markets
				</h6>
				<h6 className="col-4 text-end fw-bold" style={{ fontSize: "17px" }}>
					{millify(coin.numberOfMarkets)}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-8" style={{ fontSize: "17px" }}>
					<i className="bi bi-currency-exchange"></i> Number of Exchanges
				</h6>
				<h6 className="col-4 text-end fw-bold" style={{ fontSize: "17px" }}>
					{millify(coin.numberOfExchanges)}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-6" style={{ fontSize: "17px" }}>
					<i className="bi bi-exclamation-circle"></i> Approved Supply
				</h6>
				<h6 className="col-6 text-end fw-bold" style={{ fontSize: "17px" }}>
					{coin.supply.confirmed ? (
						<i className="bi bi-check-lg"></i>
					) : (
						<i className="bi bi-x-lg"></i>
					)}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-6" style={{ fontSize: "17px" }}>
					<i className="bi bi-exclamation-circle"></i> Total Supply
				</h6>
				<h6 className="col-6 text-end fw-bold" style={{ fontSize: "17px" }}>
					{` $${millify(coin.supply.total)}`}
				</h6>
			</div>
			<div className="row py-3 border-bottom">
				<h6 className="col-8" style={{ fontSize: "17px" }}>
					<i className="bi bi-exclamation-circle"></i> Circulating Supply
				</h6>
				<h6 className="col-4 text-end fw-bold" style={{ fontSize: "17px" }}>
					{`$ ${millify(coin.supply.circulating)}`}
				</h6>
			</div>
		</div>
	);
}
