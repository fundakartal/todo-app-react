import Button from './Button'
import CircularProgressbar from './CircularProgressbar'
import Logo from './Logo'
import Switcher from './Switcher'

const Header = ({ user, todoList, handleLogout, percentage }) => {
  return (
    <header>
      <div className='flex items-center justify-between'>
        <Logo />
        <div className='flex items-center'>
          <Button onClick={handleLogout} text='Logout' />
          <Switcher />
        </div>
      </div>
      <div className='my-4 flex w-full justify-between gap-2 sm:my-8 sm:items-center md:justify-around'>
        <img
          src='/images/tasks.svg'
          alt=''
          aria-hidden='true'
          className='mr-5 hidden w-52 sm:block'
        />
        <div className='text-left'>
          <h1 className=' text-primary dark:text-white sm:text-xl'>
            Hello,
            <span className='block text-xl font-bold sm:text-3xl'>
              {user.username}
            </span>
          </h1>
          <h3 className='my-4 font-semibold tracking-wide text-[#FF6692] sm:text-xl lg:text-2xl'>
            {percentage < 100
              ? "Let's make this day productive"
              : 'All your work is done perfectly!'}
          </h3>
        </div>
        {todoList.length > 0 && (
          <div className='shrink-0'>
            <CircularProgressbar percentage={percentage} />
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
