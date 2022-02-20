const TaskListItem = ({ list, selectedListId }) => {
  return (
    <li className={list.id === selectedListId ? 'list-name active-list' : 'list-name'} data-list-id={list.id}>
      {list.name}
    </li>
  )
}

export default TaskListItem