import useDarkMode from '../hooks/useDarkMode'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useState } from 'react'

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  )
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }
  return (
    <div className='ml-4 flex flex-col items-center'>
      <DarkModeSwitch
        sunColor={'#00bf76'}
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  )
}
export default Switcher
