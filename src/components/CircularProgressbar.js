const CircularProgressbar = ({ percentage }) => {
  return (
    <div className='relative h-28 w-28 rounded-full'>
      <svg className='relative h-full w-full'>
        <circle
          className='h-full w-full fill-transparent stroke-pink-300 stroke-[6%]'
          cx='50%'
          cy='50%'
          r='46%'
          strokeLinecap='round'
        ></circle>
        <circle
          className='h-full w-full fill-transparent stroke-primary stroke-[6%]'
          cx='50%'
          cy='50%'
          r='46%'
          strokeLinecap='round'
          strokeDasharray='calc(112 * 0.46 * 2 * 3.1416)'
          strokeDashoffset={`calc(112 * 0.46 * 2 * 3.1416 - (112 * 0.46 * 2 * 3.1416 * ${percentage}) / 100)`}
        ></circle>
      </svg>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h2 className='text-4xl font-bold text-primary'>
          {Math.floor(percentage)}
          <span className="opacity-80 font-semibold">%</span>
        </h2>
      </div>
    </div>
  )
}
export default CircularProgressbar
