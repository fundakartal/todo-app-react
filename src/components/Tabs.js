import { useRecoilState } from 'recoil'
import { tabState, todoListState } from '../atoms/todoAtom'
import todoService from '../services/Todos'
import ButtonTab from './ButtonTab'

const Tabs = () => {
  const [openTab, setOpenTab] = useRecoilState(tabState)
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const completedTasks = todoList.filter((todo) => todo.isCompleted)
  const idList = completedTasks.map((todo) => todo.id)

  const updateTodoList = () => {
    todoService.getAll().then((updatedTodoList) => setTodoList(updatedTodoList))
  }

  const handleDelete = (e, idList) => {
    e.preventDefault()
    idList.map((id) =>
      todoService.deleteItem(id).then(() => {
        updateTodoList()
      })
    )
  }

  return (
    <div className='flex grow flex-wrap gap-4 sm:justify-between lg:max-w-xl'>
      <ButtonTab
        onClick={(e) => {
          e.preventDefault()
          setOpenTab(1)
        }}
        className={
          openTab === 1 ? 'bg-primary text-white' : 'bg-white text-primary'
        }
        text='All'
      />
      <ButtonTab
        onClick={(e) => {
          e.preventDefault()
          setOpenTab(2)
        }}
        className={
          openTab === 2 ? 'bg-primary text-white' : 'bg-white text-primary'
        }
        text='Active'
      />
      <ButtonTab
        onClick={(e) => {
          e.preventDefault()
          setOpenTab(3)
        }}
        className={
          openTab === 3 ? 'bg-primary text-white' : 'bg-white text-primary'
        }
        text='Completed'
      />
      {completedTasks.length > 0 && (
        <ButtonTab
          onClick={(e) => handleDelete(e, idList)}
          className={'max-w-max bg-red-700 text-white'}
          text='Clear Completed'
        />
      )}
    </div>
  )
}

export default Tabs
