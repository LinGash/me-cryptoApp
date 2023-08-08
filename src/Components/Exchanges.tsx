import { useState } from "react";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { RingLoader } from "react-spinners";
import { useGetCryptoExchangesQuery } from "../store/cryptoCoinsApi";

export default function Exchanges() {
	const [id, setId] = useState<any>([]);
	const { data, isLoading, error } = useGetCryptoExchangesQuery() as {
		data: any;
		isLoading: any;
		error: any;
	};
	console.log(data);
	if (error) {
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
	function handleId(nowId: number) {
		let arr: any = [...id];
		let found = arr?.find((i: any) => i === nowId);
		if (!found) {
			arr?.push(nowId);
			setId(arr);
			return;
		}
		if (found) {
			let filtered = arr?.filter((i: number) => i !== nowId);
			setId(filtered);
			return;
		}
	}
	function loop(nowId: number) {
		let found;
		let n;
		for (n = 0; n <= id?.length; n++) {
			if (id[n] === nowId) {
				found = true;
			}
		}
		return found;
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
		<div className="col side-padding" style={{ backgroundColor: "#f0f2f5" }}>
			<div className="py-3">
				<div className="row p-3">
					<div className="col" style={{ fontSize: "14px" }}>
						Exchanges
					</div>
					<div className="col" style={{ fontSize: "14px" }}>
						24h Trade volume
					</div>
					<div className="col" style={{ fontSize: "14px" }}>
						Markets
					</div>
					<div className="col" style={{ fontSize: "14px" }}>
						MarketShare
					</div>
				</div>
				{data?.data?.exchanges?.map((e: any) => {
					return (
						<div>
							<div
								onClick={() => {
									handleId(e.id);
								}}
								className="row border border-1 m-3 py-3 "
								style={{ backgroundColor: "rgb(232 232 232)" }}
							>
								<div className="col" style={{ fontSize: "14px" }}>
									{e.rank}.
									<img
										className="ps-1 pe-1"
										src={e.iconUrl}
										alt="icon"
										style={{ width: "20px", height: "20px" }}
									/>
									{e.name}
								</div>
								<div className="col" style={{ fontSize: "14px" }}>
									{/* {millify(e.24hVolume)} */}
								</div>
								<div className="col" style={{ fontSize: "14px" }}>
									{e.numberOfMarkets}
								</div>
								<div className="col" style={{ fontSize: "14px" }}>
									{millify(e.btcPrice)}%
								</div>
							</div>
							{/* {loop(e.id) && (
								<div
									className="row  border border-1 m-3 text-decoration-none"
									style={{ fontSize: "14px" }}
								>
									{HTMLReactParser(e.description || "")}
								</div>
							)} */}
						</div>
					);
				})}
			</div>
		</div>
	);
}
