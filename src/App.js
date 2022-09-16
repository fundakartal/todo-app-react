import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { loginState, todoListState, userState } from './atoms/todoAtom'
import Header from './components/Header'
import Input from './components/Input'
import Login from './components/Login'
import TodoList from './components/TodoList'
import todoService from './services/Todos'

const App = () => {
  const [isLoggedin, setIsLoggedin] = useRecoilState(loginState)
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const user = useRecoilValue(userState)
  const completedTasks = todoList.filter((todo) => todo.isCompleted)
  const percentage = 100 * (completedTasks?.length / todoList?.length) || 0

  useEffect(() => {
    todoService.getAll().then((initialTodos) => setTodoList(initialTodos))
  }, [])

  if (!isLoggedin) return <Login />

  const handleLogout = () => {
    localStorage.removeItem('user-info')
    setIsLoggedin(false)
  }

  return (
    <div className='flex min-h-screen w-full flex-col items-center bg-light bg-cover px-8 py-20 text-center dark:bg-dark md:px-20 lg:px-40'>
      <div className='w-full rounded-xl bg-white bg-opacity-60 px-5 py-3 backdrop-blur-sm backdrop-filter dark:bg-opacity-20 xl:max-w-5xl'>
        <Header
          todoList={todoList}
          user={user}
          handleLogout={handleLogout}
          percentage={percentage}
        />
        <Input />
        <TodoList todoList={todoList} />
        {/* footer */}
      </div>
    </div>
  )
}
export default App
