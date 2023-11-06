import { useState } from "react";
import CounterComponent from "./components/counter.tsx";
import QuizzComponent from "./components/quiz.tsx";
import CreatorComponent from "./components/creator.tsx";
import "./App.css";

function App() {
	const [viewNum, setViewNum] = useState(0);

	return (
		<>
			<div className="d-flex justify-content-center gap-4 container mb-5">
				<button
					className="btn btn-primary"
					onClick={() => {
						setViewNum(1);
					}}
				>
					Counter + useEffect
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						setViewNum(2);
					}}
				>
					Simple quiz
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						setViewNum(3);
					}}
				>
					Basic creator
				</button>
			</div>

			{viewNum === 1 ? (
				<CounterComponent/>
			) : viewNum === 2 ? (
				<QuizzComponent/>
			) : viewNum === 3 ? (
				<CreatorComponent/>
			) : null}

			<p className="mb-5"></p>
		</>
	);
}

export default App;
