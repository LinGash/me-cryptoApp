import { useEffect, useState } from "react";
import millify from "millify";
import { useGetCryptoCoinsQuery } from "../../store/cryptoCoinsApi";
import { Link } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

export function Top10Cryptos({ homeComponentOn }: any) {
	const count = homeComponentOn ? 15 : 100;
	const [cryptos, setCryptos] = useState<any>();
	const [search, setSearch] = useState<any>();
	const { data, error, isLoading } = useGetCryptoCoinsQuery(count) as {
		data: any;
		error: any;
		isLoading: any;
	};
	useEffect(() => {
		const coins = search
			? data?.data?.coins.filter((coin: any) =>
					coin.name.toLowerCase().includes(search.toLowerCase())
			  )
			: data?.data?.coins;
		setCryptos(coins);
	}, [isLoading, search]);
	if (error)
		return (
			<div className="vh-100">
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

	const override = `
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 35vh;
	`;
	if (!cryptos)
		return (
			<div className="vh-100" style={{ backgroundColor: "#f0f2f5" }}>
				<RingLoader color="brown" size={70} css={override} />
			</div>
		);
	if (!homeComponentOn) window.scrollTo(0, 0);
	return (
		<div>
			{!homeComponentOn && (
				<div
					className="input-group input-group-sm mb-3 pt-5 pb-4"
					style={{ maxWidth: "300px", marginLeft: "auto", marginRight: "auto" }}
				>
					<span className="input-group-text" id="inputGroup-sizing-sm">
						Search
					</span>
					<input
						onChange={(e) => {
							setSearch(e.currentTarget.value);
						}}
						type="text"
						className="form-control"
						aria-label="Sizing example input"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</div>
			)}
			<div className="row row-cols-md-4">
				{cryptos?.map((coin: any) => {
					return (
						<Link
							className="ps-4"
							to={`/cryptocurrencies/${coin.uuid}`}
							style={{ textDecoration: "none" }}
						>
							<div className="col pb-4" key={coin.id}>
								<div
									className="card mb-3 my-hover my-card-width"
									style={{
										backgroundColor: "rgb(232 232 232)",
									}}
								>
									<div className="card-header d-flex flex-row justify-content-between">
										<div
											style={{ fontSize: "16px", color: "black" }}
										>{`${coin.rank}.  ${coin.name}`}</div>
										<img
											src={coin.iconUrl}
											alt="coin icon"
											style={{ width: "30px", height: "30px" }}
										/>
									</div>
									<div className="card-body pt-4 pb-5">
										<p className="card-text text-black">{`price: ${millify(
											coin.price
										)}`}</p>
										<p className="card-text text-black">{`Market Cap: ${millify(
											coin.marketCap
										)}`}</p>
										<p className="card-text text-black">{`Daily Change: ${coin.change}%`}</p>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
