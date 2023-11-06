import { useState } from "react";
import TaskComponent from "./task";

export interface TaskType {
	id: number;
	type: object;
}

function CreatorComponent() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [nextTaskId, setNextTaskId] = useState(1);

	const addTask = () => {
		const newTask = {
			id: nextTaskId,
			type: { example: "data" },
		};

		setTasks((prevTasks) => [...prevTasks, newTask]);
		setNextTaskId(nextTaskId + 1);
	};

	const deleteTask = (taskId: number) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
	};

	return (
		<div className="d-flex flex-column container bg-secondary p-3 rounded-3 shadow">
			<div className="d-flex justify-content-between bg-dark p-4 rounded-top-3 shadow">
				<p className="h1 text-white m-0">Kreator</p>
				<div
					id="add-question"
					className="d-flex justify-content-center align-items-center btn btn-primary rounded-circle shadow"
					onClick={addTask}
				>
					<p className="h5 m-0">+</p>
				</div>
			</div>

			<div
				id="options"
				className="d-flex justify-content-around container mb-5 px-4 py-3 rounded-bottom-3"
			>
				<div className="d-flex gap-3">
					<p className="h6 m-0">Maturalne ocenianie</p>
					<input
						type="checkbox"
						className="form-check-input"
						name="test-settings"
						id="test-setting-1"
					/>
				</div>
				<div className="d-flex gap-3">
					<p className="h6 m-0">Samodzielne sprawdzanie pytań otwartych</p>
					<input
						type="checkbox"
						className="form-check-input"
						name="test-settings"
						id="test-setting-2"
					/>
				</div>
				<div className="d-flex gap-3">
					<p className="h6 m-0">Egzamin zawodowy</p>
					<input
						type="checkbox"
						className="form-check-input"
						name="test-settings"
						id="test-setting-3"
					/>
				</div>
			</div>

			{tasks.length ? (
				<>
					<div
						id="tasks-list"
						className="d-flex flex-column gap-5 bg-dark p-4 rounded-3 shadow"
					>
						{tasks.map((task) => (
							<TaskComponent
								key={task.id}
								task={task}
								onDelete={deleteTask}
							/>
						))}

						<button
							onClick={() => {
								alert("to dopiero w DLC xD");
							}}
							className="btn btn-primary shadow w-100"
						>
							Create test
						</button>
					</div>
				</>
			) : null}
		</div>
	);
}

export default CreatorComponent;
