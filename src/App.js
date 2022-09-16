import { useRecoilState } from 'recoil'
import { loginState } from './atoms/todoAtom'
import Login from './components/Login'

const App = () => {
  const [isLoggedin, setIsLoggedin] = useRecoilState(loginState)

  if (!isLoggedin) return <Login />

  return <div>App</div>
}
export default App
