import SingleTodo from './SingleTodo'
import { useRecoilValue } from 'recoil'
import { tabState } from '../atoms/todoAtom'

const TodoList = ({ todoList }) => {
  const openTab = useRecoilValue(tabState)
  const completedTasks = todoList.filter((todo) => todo.isCompleted)
  const activeTasks = todoList.filter((todo) => !todo.isCompleted)
  const filteredTasks =
    openTab === 1 ? todoList : openTab === 2 ? activeTasks : completedTasks

  return (
    <div className='my-4 w-full rounded-xl bg-white bg-opacity-0 p-1 text-white shadow-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-0'>
      <h1 className='m-4 flex text-2xl text-black opacity-70 dark:text-gray-100'>
        Tasks
      </h1>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
          <SingleTodo task={task} key={index} />
        ))
      ) : (
        <div className='flex flex-col items-center px-5 sm:flex-row  sm:justify-evenly'>
          <img
            src='/images/addTask.svg'
            alt=''
            aria-hidden='true'
            className='px-5 pt-10 pb-0 sm:max-w-[50%] sm:p-5'
          />
          <p className='shrink-0 py-5 text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl'>
            There are no task
            <span className='mt-2 block text-lg font-normal text-primary dark:text-white sm:text-xl lg:text-2xl'>
              {todoList.length > 0 && completedTasks.length === 0
                ? "Let's complete a task!"
                : "Let's create a new task!"}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
export default TodoList
