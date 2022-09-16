const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='group relative ml-3 h-10 overflow-hidden rounded-full bg-primary px-7 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-primary hover:to-green-400 hover:ring-2 hover:ring-green-400 hover:ring-offset-2'
    >
      <span className='ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40'></span>
      <span className='relative'>{text}</span>
    </button>
  )
}
export default Button
