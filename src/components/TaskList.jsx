import TaskListItem from "./TaskListItem"

const TaskList = ({ lists, selectedListId, setSelectedListId }) => {


  const handleSelectList = (e) => {
    if (e.target.matches('li')) {
      setSelectedListId(e.target.dataset.listId)
    }
  }


  return (
    <ul className="task-list" onClick={handleSelectList}>
      {lists.map(list => {
        return (<TaskListItem list={list} key={list.id} selectedListId={selectedListId} />)
      })}
    </ul>
  )
}

export default TaskList