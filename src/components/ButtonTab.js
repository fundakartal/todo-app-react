const ButtonTab = ({ className, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg sm:grow`}
    >
      {text}
    </button>
  )
}
export default ButtonTab
