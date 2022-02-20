const TaskItem = ({ task, setLists, lists, selectedListId }) => {
	const handleClick = (e) => {
		const newLists = [...lists];
		const selectedList = newLists.find((list) => list.id === selectedListId);
		if (e.target.parentElement.matches(".task")) {
			const checkbox = e.target.previousElementSibling;
			checkbox.checked = !checkbox.checked;
			const selectedTask = selectedList.tasks.find(
				(task) => task.id === checkbox.dataset.id
			);
			selectedTask.complete = checkbox.checked;
			setLists(newLists);
		}
		if (e.target.parentElement.matches("label")) {
			const checkbox = e.target.parentElement.previousElementSibling;
			checkbox.checked = !checkbox.checked;
			const selectedTask = selectedList.tasks.find(
				(task) => task.id === checkbox.dataset.id
			);
			selectedTask.complete = checkbox.checked;
			setLists(newLists);
		}
	};

	return (
		<div className='task' onClick={handleClick}>
			<input
				type='checkbox'
				data-id={task.id}
				checked={task.complete}
				onChange={() => handleClick}
			/>
			<label>
				<span className='custom-checkbox'></span>
				{task.name}
			</label>
		</div>
	);
};

export default TaskItem;
