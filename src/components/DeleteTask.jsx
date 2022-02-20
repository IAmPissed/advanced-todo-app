const DeleteTask = ({ lists, selectedListId, setSelectedListId, setLists }) => {
	const handleDeleteList = () => {
		const newLists = [...lists].filter((list) => list.id !== selectedListId);
		setSelectedListId(null);
		setLists(newLists);
	};

	const handleDeleteCompleteTasks = (e) => {
		let newLists = [...lists];
		newLists.forEach((list) => {
			if (list.id === selectedListId) {
				list.tasks = list.tasks.filter((task) => !task.complete);
			}
		});
		setLists(newLists);
	};

	return (
		<div className='delete-stuff'>
			<button className='btn delete' onClick={handleDeleteCompleteTasks}>
				Clear completed tasks
			</button>
			<button className='btn delete' onClick={handleDeleteList}>
				Delete list
			</button>
		</div>
	);
};

export default DeleteTask;
