const DoneActive = ({ className }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className={className}
      height='24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        d='M0 0h24v24H0z'
        stroke='currentColor'
        strokeWidth='0px'
      ></path>
      <path
        d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z'
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0px'
      ></path>
    </svg>
  )
}
export default DoneActive
