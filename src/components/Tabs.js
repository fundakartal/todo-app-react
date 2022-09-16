import { useRecoilState } from 'recoil'
import { tabState, todoListState } from '../atoms/todoAtom'
import todoService from '../services/Todos'
import ButtonTab from './ButtonTab'

const Tabs = () => {
  const [openTab, setOpenTab] = useRecoilState(tabState)
  const [todos, setTodos] = useRecoilState(todoListState)
  const idList = todos.map((todo) => todo.id)
  const updateTodos = () => {
    todoService.getAll().then((updatedTodos) => setTodos(updatedTodos))
  }
  const handleDelete = (e, idList) => {
    e.preventDefault()
    idList.map((id) =>
      todoService.deleteItem(id).then(() => {
        updateTodos()
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
      <ButtonTab
        onClick={(e) => handleDelete(e, idList)}
        className={'bg-red-700 text-white max-w-max'}
        text='Clear All'
      />
    </div>
  )
}

export default Tabs
