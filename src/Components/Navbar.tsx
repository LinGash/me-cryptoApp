import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [clicked, setClicked] = useState<Boolean>();
	function menuClicked() {
		return clicked ? null : "d-none";
	}
	return (
		<div className="col-md-3 my-navbar-position" style={{ padding: 0 }}>
			<div
				className=" d-flex flex-column flex-md-column p-3 my-navbar-height"
				style={{ backgroundColor: "#9b968c" }}
			>
				<div className="d-flex justify-content-between align-items-center mb-md-5 me-md-auto ">
					<Link to="/" className="text-white text-decoration-none ">
						<span
							className="main-color fs-3 ps-md-3 text-black"
							style={{ fontFamily: "'Carter One', cursive" }}
						>
							Hlaing Min Aung
						</span>
					</Link>
					<i
						onClick={() => (clicked ? setClicked(false) : setClicked(true))}
						className="bi bi-list fs-1 d-md-none"
					></i>
				</div>
				<ul
					className={`nav nav-pills ${menuClicked()} d-md-flex flex-column flex-md-column mb-auto my-ul-width my-ul-position`}
					style={{ backgroundColor: "#9b968c" }}
				>
					<li
						className="nav-item"
						onClick={() => (clicked ? setClicked(false) : setClicked(true))}
					>
						<Link to="/" className="nav-link main-color fw-bold hover-shadow">
							<i className="bi bi-house-door"></i> Home
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => (clicked ? setClicked(false) : setClicked(true))}
					>
						<Link
							to="/cryptocurrencies"
							className="nav-link main-color fw-bold"
						>
							<i className="bi bi-currency-bitcoin"></i> Cryptoccurrencies
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => (clicked ? setClicked(false) : setClicked(true))}
					>
						<Link to="/exchanges" className="nav-link main-color fw-bold">
							<i className="bi bi-bar-chart"></i> Exchanges
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => (clicked ? setClicked(false) : setClicked(true))}
					>
						<Link to="/news" className="nav-link main-color fw-bold">
							<i className="bi bi-lightbulb"></i> News
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
