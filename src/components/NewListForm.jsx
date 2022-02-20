import { useRef } from "react"

const NewListForm = ({ setLists }) => {
  const listNameRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const listName = listNameRef.current.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    listNameRef.current.value = null
    setLists(prevLists => {
      return [...prevLists, list]
    })
  }

  const createList = (listName) => {
    return { id: Date.now().toString(), name: listName, tasks: [] }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new list"
        placeholder="new list name"
        aria-label="new list name"
        ref={listNameRef}
      />
      <button className="btn create" aria-label="create new list">+</button>
    </form>
  )
}

export default NewListForm