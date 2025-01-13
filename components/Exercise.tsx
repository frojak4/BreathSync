'use client'
import { aleo } from '@/fonts'
import { ExerciseType } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import * as motion from "motion/react-client"




const Exercise = ({ data }: { data: ExerciseType }) => {


    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)
    const [step, setStep] = useState(1)
    const [length, setLength] = useState(16)
    const [text, setText] = useState<string>(data.steps[0].text)


    useEffect(() => {
        if (started && !finished) {
            const interval = setTimeout(() => {
                if (length > step) {
                    console.log(data.steps[step % data.steps.length].text)
                    setText(data.steps[step % data.steps.length].text)
                    setStep((prev) => prev + 1)
                } else {
                    setFinished(true)
                    console.log('All done with your exercise')

                }
            }, data.steps[step % data.steps.length].time * 1000)



            return () => clearTimeout(interval)
        }



    }, [started, step])

    return (
        <div className="bg-secondary rounded-2xl mx-auto w-4/5 md:w-2/5 mt-6 p-6">

            {!started ?
                <div className="flex-col justify-center items-center text-center">
                    <span className="text-center">
                        <h1 className={`${aleo.variable} text-3xl md:text-4xl font-aleo py-2`}>{data.name}</h1>
                    </span>
                    <ul className="text-start p-2">
                        {data.steps.map((step, i) => {
                            return <li className="text-sm md:text-base py-1" key={i}>• {step.text}</li>
                        })}
                    </ul>

                    <Button onClick={() => setStarted(true)}>Start</Button>
                </div>
                :
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >Hallo</motion.div>}
        </div>
    )
}

export default Exercise