import Tasks from "./Tasks"
import NewTaskCreator from "./NewTaskCreator"
import DeleteTask from "./DeleteTask"

const TodoBody = ({ lists, selectedListId, setSelectedListId, setLists }) => {


  return (
    <div className="todo-body">
      <Tasks lists={lists} selectedListId={selectedListId} setLists={setLists} />
      <NewTaskCreator lists={lists} setLists={setLists} selectedListId={selectedListId}/>
      <DeleteTask lists={lists} selectedListId={selectedListId} setSelectedListId={setSelectedListId} setLists={setLists} />
    </div>
  )
}

export default TodoBody