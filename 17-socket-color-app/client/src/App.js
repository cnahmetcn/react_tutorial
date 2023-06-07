import "./App.css";

import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
import Palatte from "./component/Palatte";

function App() {
	const [activeColor, setActiveColor] = useState("#282c34");

	useEffect(() => {
		init();

		// abonelik işlemini başlatıyoruz
		subscribe((color) => {
			setActiveColor(color);
		});
	}, []);

	return (
		<div className="App" style={{ backgroundColor: activeColor }}>
			<h1>{activeColor}</h1>
			<Palatte activeColor={activeColor} />
		</div>
	);
}

export default App;