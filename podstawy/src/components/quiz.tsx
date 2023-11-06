import { MouseEvent } from "react";

function QuizzComponent() {
	function testMouse(e: MouseEvent): void {
		const eTargetClass = e.currentTarget.classList;
		if (eTargetClass.contains("active")) eTargetClass.remove("active");
		else eTargetClass.add("active");
	}

	const cos = ["0", "2", "co kurw@?", "chyba 4"];
	const corect = ["0", "co kurw@?"];
	function check(): void {
		const activeElements = document.querySelectorAll(".active");
		let git = 0;

		for (const e of activeElements) {
			let gitInner = 0;

			for (const corectE of corect) {
				if (e.innerHTML === corectE) {
					gitInner++;
					git++;
				}
			}

			if (gitInner) {
				console.log("przeszło");
			} else return alert("srasz");
		}

		if (git === corect.length) alert("pass");
		else alert("srasz");
	}

	return (
		<div className="container">
			<div className="d-flex flex-column container w-50">
				<p className="h4 mb-4">
					Ile rąk ma koń? - dwaie odpowiedzi są prawidłowe
				</p>

				<ul className="list-group">
					{cos.map((e) => (
						<li
							key={e}
							className="list-group-item"
							onClick={(e) => {
								testMouse(e);
							}}
						>
							{e}
						</li>
					))}
				</ul>

				<button
					className="mt-3 btn btn-primary"
					onClick={() => {
						check();
					}}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default QuizzComponent;
