import { useRef } from "react";

const NewTaskCreator = ({ lists, setLists, selectedListId }) => {
	const taskNameRef = useRef();

	const handleAddTask = (e) => {
		e.preventDefault();
		const taskName = taskNameRef.current.value;
		if (taskName === null || taskName === "") return;
		const task = createTask(taskName);
		const newLists = [...lists];
		const selectedList = newLists.find((list) => list.id === selectedListId);
		selectedList.tasks = [...selectedList.tasks, task];

		setLists(newLists);
		taskNameRef.current.value = "";
	};

	const createTask = (name) => {
		return { id: Date.now().toString(), name, complete: false };
	};

	return (
		<div className='new-task-creator'>
			<form onSubmit={handleAddTask}>
				<input
					type='text'
					className='new task'
					placeholder='new task name'
					aria-label='new task name'
					ref={taskNameRef}
				/>
				<button className='btn create' aria-label='create new task'>
					+
				</button>
			</form>
		</div>
	);
};

export default NewTaskCreator;
