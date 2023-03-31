import { TbDice5Filled } from 'react-icons/tb'

const Botao = () => {
  return (
    <div className='flex justify-center relative'>
        <TbDice5Filled className='absolute top-7 md:top-11 text-[--color-Dark-Blue] text-3xl z-20 cursor-pointer'/>
        <div className='flex items-center justify-center absolute top-3 md:top-7 w-16 h-16 rounded-full bg-[--color-secondary] cursor-pointer hover:bg-[--color-primary] hover:blur-md z-10 opacity-80' />
        <div className='flex items-center justify-center absolute top-3 md:top-7 w-16 h-16 rounded-full bg-[--color-secondary]' />
    </div>
  )
}

export default Botao