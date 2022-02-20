import TaskItem from "./TaskItem"

const Tasks = ({ lists, selectedListId, setLists }) => {

  const selectedList = [...lists].find(list => list.id === selectedListId) || null



  return (
    <div className="tasks">
      {selectedList ? selectedList.tasks.map(task => <TaskItem task={task} key={task.id} selectedListId={selectedListId} setLists={setLists} lists={lists}/>) : null}
    </div>
  )
}

export default Tasks