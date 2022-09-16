import Tabs from './Tabs'

const Footer = ({ leftTasksNumber }) => {
  return (
    <div className='flex w-full flex-wrap items-center justify-between gap-4'>
      <p className='shrink-0 rounded-xl bg-white bg-opacity-0 px-5 py-3 text-gray-800 shadow-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-0 dark:text-white'>
        {leftTasksNumber === 0
          ? 'No tasks left'
          : leftTasksNumber === 1
          ? '1 task left'
          : `${leftTasksNumber} tasks left`}
      </p>
      <Tabs />
    </div>
  )
}
export default Footer
