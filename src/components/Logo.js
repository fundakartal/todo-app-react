const Logo = () => {
  return (
    <div className='flex items-center'>
      <a href='/'>
        <img
          src='/images/logo.svg'
          alt='logo'
          className='h-12 w-12 cursor-pointer drop-shadow-md'
        />
      </a>
      <p className='ml-3 hidden text-xl font-bold text-primary drop-shadow-md dark:text-green-100 dark:filter-none md:block'>
        ToDo App
      </p>
    </div>
  )
}
export default Logo
