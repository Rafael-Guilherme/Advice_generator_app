import { useState, useEffect } from 'react'
import { BsFillPauseFill } from 'react-icons/bs'
import { TbDice5Filled } from 'react-icons/tb'

interface slipProps {
    id: number,
    advice: string,
}

const AdviceBox = () => {
    const [slip, setSlip] = useState<slipProps | undefined>(undefined)

    const fetchAdviceData = () => {
        fetch("https://api.adviceslip.com/advice")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setSlip(data.slip)
            })
    }

    useEffect(() => {
        fetchAdviceData()
    }, [])

    return (
        <div className='flex items-center justify-center mt-36 mx-auto w-[320px] md:w-[560px] h-[330px] bg-[--color-Dark-Grayish-Blue] rounded-xl shadow-lg'>
            <div className='text-center'>
                <p className='text-[--color-secondary] font-semibold text-sm tracking-[0.3em] mb-8'>
                    ADVICE #{slip?.id}
                </p>
                <div className='flex justify-center'>
                    <h2 className='text-[--color-primary] text-2xl md:text-3xl w-[280px] md:w-[500px] font-bold mb-6'>
                        "{slip?.advice}"
                    </h2>
                </div>
                <div>
                    <div className='flex items-center justify-center '>
                        <div className='flex-1 h-[1px] bg-[--color-primary-fade]' />
                        <p className='text-[--color-primary] text-3xl mx-3'>
                            <BsFillPauseFill />
                        </p>
                        <div className='flex-1 h-[1px] bg-[--color-primary-fade]' />
                    </div>
                </div>
                <div className='flex justify-center relative'>
                    <TbDice5Filled className='absolute top-7 md:top-11 text-[--color-Dark-Blue] text-3xl z-20'/>
                    <div className='flex items-center justify-center absolute top-3 md:top-7 w-16 h-16 rounded-full bg-[--color-secondary] cursor-pointer hover:bg-[--color-primary] hover:blur-md z-10 opacity-80' />
                    <div className='flex items-center justify-center absolute top-3 md:top-7 w-16 h-16 rounded-full bg-[--color-secondary]'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdviceBox