const TodoHeader = ({ selectedListId, lists }) => {

  const selectedList = lists.find(list => list.id === selectedListId) || null

  const remainingTaskLength = selectedList ? selectedList.tasks.filter(task => !task.complete).length : null


  return (
    <div className="todo-header">
      <h2 className="list-title">{selectedList ? selectedList.name : 'list title'}</h2>
      <p className="task-count">{remainingTaskLength ? remainingTaskLength : '0'} task{remainingTaskLength > 1 ? 's' : ''} remaining</p>
    </div>
  )
}

export default TodoHeader