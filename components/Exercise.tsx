'use client'
import { aleo } from '@/fonts'
import { ExerciseType, Step } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import * as motion from "motion/react-client"




const Exercise = ({ data }: { data: ExerciseType }) => {


    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)
    const [step, setStep] = useState(0)
    const [length, setLength] = useState(16)
    const [text, setText] = useState<string>(data.steps[0].text)
    const [scale, setScale] = useState<number>(1)

    console.log(data.color)

    const handleBreathing = (step: Step) => {
        if (step.type === 'exhale') {
            setScale(1)
        } else if (step.type === 'inhale') {
            setScale(2)
        }
        setText(step.text)
        setStep((prev) => prev + 1)
    }

    const handleStart = () => {
        handleBreathing(data.steps[0])
        setStarted(true)
    }

    useEffect(() => {
        if (started && !finished) {
            console.log('test')
            const interval = setTimeout(() => {
                if (length > step) {
                    console.log('frode')
                    handleBreathing(data.steps[step % data.steps.length])
                } else {
                    setFinished(true)
                    console.log('All done with your exercise')

                }
            }, data.steps[step % data.steps.length].time * 1000)



            return () => clearTimeout(interval)
        }

    }, [started, step])

    return (
        <>
            {!started ? <div className="bg-secondary rounded-2xl mx-auto w-4/5 md:w-2/5 mt-6 p-6">


                <div className="flex-col justify-center items-center text-center">
                    <span className="text-center">
                        <h1 className={`${aleo.variable} text-3xl md:text-4xl font-aleo py-2`}>{data.name}</h1>
                    </span>
                    <ul className="text-start p-2">
                        {data.steps.map((step, i) => {
                            return <li className="text-sm md:text-base py-1" key={i}>• {step.text}</li>
                        })}
                    </ul>

                    <Button onClick={handleStart}>Start</Button>
                </div>
            </div >
                :
                <motion.div className={`border-2 border-${data.color}-400 text-center flex items-center mt-32 mx-auto shadow-2xl dark:shadow-gray-200/20`}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: "50%",


                    }}
                    animate={{ scale }} // Animate scale based on state
                    transition={{ duration: 4, ease: "easeInOut" }} // Smooth easing 
                >
                    <h3 className="text-sm">{text}</h3> </motion.div >}

        </>
    )
}

export default Exercise