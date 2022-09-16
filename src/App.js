import { useRecoilState } from 'recoil'
import { loginState } from './atoms/todoAtom'
import Login from './components/Login'

const App = () => {
  const [isLoggedin, setIsLoggedin] = useRecoilState(loginState)

  if (!isLoggedin) return <Login />

  return (
    <div className='flex min-h-screen w-full flex-col items-center bg-light bg-cover px-8 py-20 text-center dark:bg-dark md:px-20 lg:px-40'>
      <div className='w-full rounded-xl bg-white bg-opacity-60 px-5 py-3 backdrop-blur-sm backdrop-filter dark:bg-opacity-20 xl:max-w-5xl'>
        {/* header */}
        {/* input */}
        {/* todo list */}
        {/* footer */}
      </div>
    </div>
  )
}
export default App
