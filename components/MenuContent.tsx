import { aleo } from '@/fonts'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ExerciseType } from '@/lib/types'





const MenuContent = ({ data }: { data: ExerciseType }) => {
    return (
        <div className={`rounded-3xl h-full mx-auto flex flex-col items-center justify-center border-2 border-${data.color}-400`}>
            <h1 className={`${aleo.variable} text-xl md:text-2xl font-aleo py-2`}>{data.name}</h1>
            <h4 className="pl-4 text-base md:text-lg font-semibold pt-2">Benefits:</h4>
            <ul className="w-full text-center">
                {data.benefits.map((benefit, i) => {
                    return <li key={i} className="text-sm md:text-base truncate">• {benefit}</li>
                })}
            </ul>
            <span className="p-4">
                <Link href={`/exercise/${data.urlname}`}>
                    <Button variant="secondary">Start</Button>
                </Link>
            </span>
        </div>
    )
}

export default MenuContent