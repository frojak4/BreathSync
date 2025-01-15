'use client'
import { aleo } from '@/fonts'
import { ExerciseType, Step } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import * as motion from "motion/react-client"
import { Slider } from "@/components/ui/slider"
import FinishScreen from './FinishScreen'





const Exercise = ({ data }: { data: ExerciseType }) => {


    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)
    const [step, setStep] = useState(0)
    const [length, setLength] = useState(16)
    const [text, setText] = useState<string>(data.steps[0].text)
    const [reps, setReps] = useState([10])
    const [scale, setScale] = useState<number>(1)


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
        setLength(data.steps.length * reps[0])
        handleBreathing(data.steps[0])
        setStarted(true)
    }

    const handleValueChange = (newValue: number[]) => {
        setReps(newValue)
    }

    useEffect(() => {
        if (started && !finished) {
            console.log('test')
            const interval = setTimeout(() => {
                if (length > step) {
                    handleBreathing(data.steps[step % data.steps.length])
                } else {
                    setFinished(true)
                    console.log('All done with your exercise')

                }
            }, data.steps[(step - 1) % data.steps.length].time * 1000)



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
                    <div className="p-2 font-semibold text-xl">Repetitions: {reps}
                        <Slider value={reps} className="p-4" onValueChange={handleValueChange} max={20} step={1} />
                    </div>
                    <Button onClick={handleStart}>Start</Button>
                </div>
            </div >
                : !finished ?
                    <motion.div className={`border-2 border-${data.color}-400 text-center text-xs justify-center flex items-center mt-32 mx-auto shadow-2xl dark:shadow-gray-200/20`}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: "50%",
                        }}
                        animate={{ scale }}
                        transition={{ duration: data.steps[(step - 1) % data.steps.length].time, ease: "easeInOut" }}
                    >
                        <h3 className="select-none">{text}</h3> </motion.div > :
                    <FinishScreen data={data} />}
            <h3>{step} / {length}</h3>

        </>
    )
}

export default Exercise