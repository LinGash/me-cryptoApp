import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import millify from "millify";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export default function Chart({ coinHistory, coinName, coinPrice }: any) {
	const data = {
		labels: coinHistory?.data?.history?.map((obj: any) => {
			return new Date(obj?.timestamp).toLocaleDateString();
		}),
		datasets: [
			{
				label: "Price in USD",
				data: coinHistory?.data?.history?.map((obj: any) => {
					return obj?.price;
				}),
				fill: false,
				backgroundColor: "#551313",
			},
		],
	};

	return (
		<div>
			<div className="row px-3 px-md-5 py-3">
				<h4 className="col-12 col-md-5 crypto-detail-color">
					{coinName} Price Chart
				</h4>
				<h6 className="col-5 col-md-3 fw-bold">
					Changes: {coinHistory?.data?.change}%
				</h6>
				<h6 className="col-7 col-md-4 fw-bold">
					Current {coinName} Price: ${millify(coinPrice)}
				</h6>
			</div>
			<Line data={data}></Line>
		</div>
	);
}
