'use client'
import { ExerciseType } from '@/lib/types'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const FinishScreen = ({ data }: { data: ExerciseType }) => {

    const router = useRouter();

    const handleRefresh = () => {
        console.log('ok')
        window.location.reload()
    }

    const handleNewExercise = () => {
        router.push('/')
    }


    return (
        <div className="flex justify-center items-center flex-col p-8 text-center pt-28">
            <h1 className="md:text-4xl text-2xl font-bold p-2">Thank you for finishing: {data.name}</h1>
            <h3 className="md:text-xl text-lg font-semibold p-2 text-slate-400">What would you like to do next?</h3>
            <span className="flex gap-8 pt-16">
                <Button className="shadow-md dark:shadow-gray-200/10" onClick={handleRefresh} variant="default">Start again?</Button>
                <Button className="shadow-md dark:shadow-gray-200/10" onClick={handleNewExercise} variant="outline">New exercise</Button>
            </span>
        </div>
    )
}

export default FinishScreen