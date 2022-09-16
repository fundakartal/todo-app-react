import { useEffect, useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import todoService from '../services/Todos'
import { todoListState } from '../atoms/todoAtom'
import Delete from '../icons/Delete'
import Done from '../icons/Done'
import DoneActive from '../icons/DoneActive'
import Edit from '../icons/Edit'
import Left from '../icons/Left'

const SingleTodo = ({ task }) => {
  const setTodoList = useSetRecoilState(todoListState)
  const [errorMessage, setErrorMessage] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editedTask, setEditedTask] = useState(task.content)
  const editRef = useRef(null)

  useEffect(() => {
    if (edit) {
      editRef.current?.focus()
    }
  }, [edit])

  const updateTodoList = () => {
    todoService.getAll().then((updatedTodoList) => setTodoList(updatedTodoList))
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    todoService.deleteItem(id).then(() => {
      updateTodoList()
    })
  }

  const handleDone = (e, id) => {
    e.preventDefault()
    const updatedTask = { ...task, isCompleted: !task.isCompleted }
    todoService.update(id, updatedTask).then(() => {
      updateTodoList()
    })
  }

  const handleEdit = (e, id) => {
    e.preventDefault()
    if (editedTask.trim().length < 3) {
      setEditedTask(task.content)
      setErrorMessage('Task must contain at least 3 characters')
      setTimeout(() => setErrorMessage(null), 3000)
      return
    }
    const newTask = { ...task, content: editedTask.trim() }
    todoService.update(id, newTask).then(() => {
      updateTodoList()
    })
  }

  return (
    <div className='group'>
      <form
        onSubmit={(e) => {
          handleEdit(e, task.id)
        }}
        className='mx-2 my-4 flex items-center justify-between rounded-md bg-pink-200 bg-opacity-20 p-4 shadow drop-shadow-lg backdrop-blur-lg hover:bg-opacity-30 hover:shadow-special-before dark:bg-black dark:bg-opacity-20 dark:hover:shadow-md'
      >
        {edit ? (
          <input
            className='rounded-xl bg-white bg-opacity-20 py-1 px-2 text-black opacity-60 outline-none dark:bg-black dark:text-white'
            required
            type='text'
            value={editedTask}
            ref={editRef}
            maxLength={280}
            onChange={({ target }) => setEditedTask(target.value)}
          />
        ) : (
          <span
            className={`${
              task.isCompleted && 'line-through opacity-30'
            } truncate text-left text-black opacity-60 hover:overflow-visible hover:whitespace-normal dark:text-white dark:opacity-70 lg:text-lg`}
          >
            {task.content}
          </span>
        )}

        <div className='h-9 w-9 animate-pulse group-hover:hidden sm:hidden'>
          <Left className='h-full w-full rounded-lg p-1.5 text-primary hover:bg-white hover:bg-opacity-80' />
        </div>

        <div className='hidden items-center gap-2 group-hover:flex sm:flex '>
          <button
            onClick={() => {
              setEdit(!edit)
            }}
            disabled={task.isCompleted}
            className='h-9 w-9 disabled:opacity-30'
          >
            <Edit className='h-full w-full  rounded-lg p-1.5 text-primary hover:bg-white hover:bg-opacity-80' />
          </button>
          <button
            onClick={(e) => handleDelete(e, task.id)}
            className={`${edit && 'hidden'} h-9 w-9`}
          >
            <Delete className='h-full w-full rounded-lg p-1.5 text-primary hover:bg-white hover:bg-opacity-80' />
          </button>
          <button
            onClick={(e) => handleDone(e, task.id)}
            className={`${edit && 'hidden'} h-9 w-9`}
          >
            {task.isCompleted ? (
              <DoneActive className='h-full w-full rounded-lg p-1.5 text-primary hover:bg-white hover:bg-opacity-80' />
            ) : (
              <Done className=' h-full w-full  rounded-lg p-1.5 text-primary hover:bg-white hover:bg-opacity-80  ' />
            )}
          </button>
        </div>
      </form>
      <p className={`${!errorMessage && 'hidden'} py-2 text-xl text-red-900`}>
        {errorMessage}
      </p>
    </div>
  )
}
export default SingleTodo
