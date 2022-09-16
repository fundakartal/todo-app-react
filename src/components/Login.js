import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { loginState, userState } from '../atoms/todoAtom'
import Button from './Button'
import Logo from './Logo'

const Login = () => {
  const [username, setUserName] = useState('')
  const [message, setMessage] = useState(null)
  const setUser = useSetRecoilState(userState)
  const setIsLoggedin = useSetRecoilState(loginState)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user-info')
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
      setIsLoggedin(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username) {
      const user = { username }
      localStorage.setItem('user-info', JSON.stringify(user))
      setIsLoggedin(true)
      setUser(user)
    } else {
      setMessage('Cannot be empty')
      setTimeout(() => {
        setMessage(null)
      }, 1500)
    }
  }

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-light bg-cover px-8 pt-10 dark:bg-dark md:px-20 lg:px-40'>
      <div className='flex flex-col items-center rounded-xl bg-white bg-opacity-80 p-5 pb-12 backdrop-blur-sm backdrop-filter sm:flex-row'>
        <div className='mb-10 w-5/6  md:mb-0 md:w-1/2 lg:w-full lg:max-w-sm'>
          <img
            src='/images/hello.svg'
            alt='a cute girl saying hello'
            aria-hidden='true'
            className='w-full'
          />
        </div>
        <div className='flex flex-col items-center md:w-1/2 lg:flex-grow lg:text-left'>
          <Logo />
          <h1 className='my-2 text-center text-2xl font-medium text-gray-900 sm:my-4 sm:text-4xl md:text-left'>
            Welcome Back
          </h1>
          <p className='mb-8 leading-relaxed text-gray-800'>
            Sign in to continue
          </p>
          <form
            onSubmit={handleSubmit}
            className='flex w-full items-end justify-center md:justify-start'
          >
            <div className='relative w-2/4 sm:grow'>
              <label
                htmlFor='username'
                className={`text-sm leading-7 ${
                  message ? 'text-red-600' : 'text-gray-600'
                } `}
              >
                {message ? message : 'Username'}
              </label>
              <input
                className='h-10 w-full rounded-full bg-white bg-opacity-20 pl-4 text-sm outline-none drop-shadow-lg backdrop-blur-lg placeholder:text-gray-700 focus:mt-2 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:bg-black dark:bg-opacity-20 dark:text-white dark:placeholder:text-slate-200'
                required
                type='text'
                value={username}
                onChange={({ target }) => setUserName(target.value)}
              />
            </div>
            <Button type='submit' onClick={handleSubmit} text='Login' />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
