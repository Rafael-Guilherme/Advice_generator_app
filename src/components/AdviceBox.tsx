import React, { useState, useEffect } from 'react'
import { BsFillPauseFill } from 'react-icons/bs'
import Botao from './Botao'

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

    const newAdvice = () => {
        fetchAdviceData()
    }

    useEffect(() => {
        fetchAdviceData()
    }, [])

    return (
        <div>
            <div className='flex items-center justify-center mt-36 mx-auto w-[320px] md:w-[560px] h-[330px] bg-[--color-Dark-Grayish-Blue] rounded-xl shadow-lg'>
                <div className='text-center'>
                    <p className='text-[--color-secondary] font-semibold text-sm tracking-[0.3em] mb-8'>
                        ADVICE #{slip?.id}
                    </p>
                    <div className='flex justify-center'>
                        <h2 className='text-[--color-primary] text-2xl w-max-[280px] md:w-max-[500px] font-bold mb-6'>
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
                </div>
            </div>
            <div onClick={() => newAdvice()} className='flex justify-center z-10 mt-[-45px] sm:mt-[-60px]'>
                <Botao />
            </div>
        </div>
    )
}

export default AdviceBox