import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import {
	Home,
	Cryptocurrencies,
	Exchanges,
	News,
	CryptoDetails,
} from "./Components";

function App() {
	return (
		<div>
			<div className="row" style={{ marginRight: 0 }}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/cryptocurrencies"
						element={<Cryptocurrencies />}
					></Route>
					<Route
						path="/cryptocurrencies/:id"
						element={<CryptoDetails />}
					></Route>
					<Route path="/exchanges" element={<Exchanges />}></Route>
					<Route path="/news" element={<News />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
