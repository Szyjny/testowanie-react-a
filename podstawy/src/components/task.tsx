import { TaskType } from "./creator.tsx";

interface TaskProps {
	task: TaskType;
	onDelete: (id: number) => void;
}

const TaskComponent: React.FC<TaskProps> = ({ task, onDelete }) => {
	return (
		<div className="d-flex flex-row justify-content-between card bg-dark border shadow p-3 rounded-2">
			<div>
				<p className="h4 card-title text-light">ID zadania: {task.id}</p>
				<p className="m-0">Typ: {JSON.stringify(task.type)}</p>
				<p className="m-0">Typ: {JSON.stringify(task.type)}</p>
				<p className="m-0">Typ: {JSON.stringify(task.type)}</p>
				<p className="m-0">Typ: {JSON.stringify(task.type)}</p>
			</div>
			<button
				className="btn btn-danger shadow"
				onClick={() => onDelete(task.id)}
			>
				Usuń
			</button>
		</div>
	);
};

export default TaskComponent;
