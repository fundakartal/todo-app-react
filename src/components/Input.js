import { useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'
import Plus from '../icons/Plus'
import todoService from '../services/Todos'

const Input = () => {
  const [task, setTask] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const setTodoList = useSetRecoilState(todoListState)
  const inputRef = useRef(null)

  const updateTodos = () => {
    todoService.getAll().then((returnedTodos) => setTodoList(returnedTodos))
  }

  const addNewTask = (e) => {
    e.preventDefault()
    if (task.trim().length < 3) {
      setErrorMessage('Task must contain at least 3 characters')
      setTimeout(() => setErrorMessage(null), 3000)
      return
    }
    const taskObj = {
      content: task.trim(),
      isCompleted: false,
    }
    todoService.create(taskObj).then(() => {
      updateTodos()
    })
    setTask('')
    inputRef.current?.blur()
  }

  return (
    <div className='md:mt-10'>
      <form
        onSubmit={(e) => {
          addNewTask(e)
        }}
        className='relative mt-3 flex items-center'
      >
        <div className='relative flex grow items-center'>
          <input
            className='blur:shadow-none h-12 w-full rounded-full bg-white bg-opacity-20 pl-4 font-light shadow-special-before outline-none drop-shadow-lg backdrop-blur-lg transition-shadow placeholder:text-gray-600 focus:shadow-special dark:bg-black dark:bg-opacity-5 dark:text-white dark:placeholder:text-slate-200 md:h-16 md:pl-8 md:text-xl lg:text-2xl'
            required
            type='text'
            placeholder='Type a new task'
            value={task}
            onChange={({ target }) => setTask(target.value)}
            ref={inputRef}
          />
          <button
            disabled={task.trim().length < 3}
            onClick={addNewTask}
            type='submit'
            className='absolute right-2 flex h-8 w-8 items-center justify-center rounded-[100%] bg-white bg-opacity-80 drop-shadow-lg backdrop-blur-lg hover:bg-gray-100 disabled:opacity-30 dark:bg-opacity-60 md:h-12 md:w-12'
          >
            <Plus className='h-10 w-10 text-primary' />
          </button>
        </div>
      </form>
      <p className='py-2 text-xl text-red-900'>{errorMessage}</p>
    </div>
  )
}
export default Input
