import { useState, useEffect } from "react";

function CounterComponent() {
	const [count, setCount] = useState<number>(0);
	const headerText = document.querySelector("h1");

	useEffect(() => {
		if (count < 0 && headerText) headerText.style.color = "pink";
		else if (headerText) headerText.style.color = "red";
	}, [count, headerText]);

	return (
		<div className="d-flex flex-column text-center container">
			<h1>Hello Word</h1>
			<h2>{count}</h2>
			<div id="mak" className="d-flex justify-content-center gap-5">
				<button
					className="btn btn-primary"
					onClick={() => {
						setCount(count + 1);
					}}
				>
					+
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						setCount(count - 1);
					}}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default CounterComponent;
