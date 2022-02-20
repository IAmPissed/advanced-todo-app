import { useState, useEffect } from "react";
import TodoAppMainTitle from "./components/TodoAppMainTitle";
import TaskListTitle from "./components/TaskListTitle";
import TaskList from "./components/TaskList";
import NewListForm from "./components/NewListForm";
import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";
import './index.css'

function App() {

  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
  const LOCAL_STORAGE_LIST_KEY = 'task.lists'

  const [lists, setLists] = useState([])
  const [selectedListId, setSelectedListId] = useState(localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY))


  useEffect(() => {
    const existingTaskLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY))
    const existingSelectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)
    if (existingTaskLists) setLists(existingTaskLists)
    if (existingSelectedListId) setSelectedListId(existingSelectedListId)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
  }, [lists, selectedListId])




  return (
    <div className="container">
      <TodoAppMainTitle />
      <div className="all-tasks">
        <TaskListTitle />
        <TaskList lists={lists} setSelectedListId={setSelectedListId} selectedListId={selectedListId} />
        <NewListForm setLists={setLists} />
      </div>
      {lists.length === 0 ? '' : <div className="todo-list">
        <TodoHeader selectedListId={selectedListId} lists={lists} />
        <TodoBody selectedListId={selectedListId} lists={lists} setSelectedListId={setSelectedListId} setLists={setLists} />
      </div>}

    </div>
  );
}

export default App;
