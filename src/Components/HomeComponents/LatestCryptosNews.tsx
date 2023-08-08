import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useGetCryptoCoinsQuery } from "../../store/cryptoCoinsApi";
import { useGetCryptoNewsQuery } from "../../store/cryptoNewsApi";

export default function LatestCryptosNews({ homeComponentOn }: any) {
	const [newsCategory, setnewsCategory] = useState("cryptocurrencies");
	const { data, error } = useGetCryptoNewsQuery({
		newsCategory,
		count: homeComponentOn ? 10 : 100,
	});
	const { data: coinsData } = useGetCryptoCoinsQuery(100);
	const coins = coinsData?.data?.coins;
	if (!homeComponentOn) window.scrollTo(0, 0);
	return (
		<div>
			{!homeComponentOn && (
				<select
					onChange={(e) =>
						setnewsCategory(`${e.currentTarget.value} cryptocurrencies`)
					}
					className="form-select mt-3"
					aria-label="Default select example"
					style={{
						maxWidth: "200px",
						border: "1px solid rgb(85, 19, 19)",
						backgroundColor: "rgb(232 232 232)",
					}}
				>
					<option selected>All</option>
					{coins?.map((coin: any) => {
						return (
							<option key={coin.name} value={coin.name}>
								{coin.name}
							</option>
						);
					})}
				</select>
			)}
			{data?.value.length === 0 && (
				<h4 className="mt-5 vh-100">No result...</h4>
			)}
			<div className="row row-cols-1 row-cols-md-2" style={{ width: "0.5fr" }}>
				{data?.value.map((n: any) => {
					return (
						<a
							href={n.url}
							target="_blank"
							className="col text-decoration-none text-black"
							key={n.url}
						>
							<div
								className="my-4 px-3 rounded-2 "
								style={{
									backgroundColor: "rgb(232 232 232)",
									border: "1px solid rgb(85, 19, 19)",
								}}
							>
								<div className="row pt-3 px-2">
									<h4
										style={{ fontFamily: "serif", fontSize: "21px" }}
										className="col-9 p-0"
									>
										{n.name}
									</h4>
									<img
										// style={{ width: " height: "100px" }}
										className="col-3 ms-auto p-0"
										src={n?.image?.thumbnail?.contentUrl}
										alt="image"
									/>
								</div>
								<h5
									style={{ fontFamily: "sans-serif", fontSize: "18px" }}
									className="pt-4 px-0"
								>
									{n.description}
								</h5>
								<div className="row pt-4 pb-5">
									<div className="col-7">
										<div className="d-flex flex-row">
											<img
												className=""
												style={{ width: "20px", height: "20px" }}
												src={n.provider[0].image?.thumbnail?.contentUrl}
												alt="icon"
											/>
											<h6
												className="ps-2"
												style={{ fontFamily: "sans-serif", fontSize: "18px" }}
											>
												{n?.provider[0].name}
											</h6>
										</div>
									</div>
									<h6
										className="col-5 text-end"
										style={{ fontFamily: "sans-serif", fontSize: "18px" }}
									>
										{moment(n.datePublished)
											.startOf("ss" as any)
											.fromNow()}
									</h6>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
