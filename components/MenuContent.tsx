import { aleo } from '@/fonts'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ExerciseType } from '@/lib/types'





const MenuContent = ({ data }: { data: ExerciseType }) => {

    const colorMap: { [key: string]: string } = {
        red: 'border-red-400',
        green: 'border-green-400',
        pink: 'border-pink-400',
        blue: 'border-blue-400',
        orange: 'border-orange-400',
        purple: 'border-purple-400',
        yellow: 'border-yellow-400'

    }


    return (
        <div className={`rounded-3xl h-full mx-auto flex flex-col items-center justify-center border-2 ${colorMap[data.color] || ''}`}>
            <h1 className={`${aleo.variable} text-2xl md:text-4xl font-aleo pt-2`}>{data.name}</h1>
            <h3 className="text-slate-400 font-bold text-lg md:text-xl pb-2 text-center">{data.tagline}</h3>
            <h4 className="pl-4 text-md md:text-xl font-semibold pt-2">Benefits:</h4>
            <ul className="w-full text-center">
                {data.benefits.map((benefit, i) => {
                    return <li key={i} className="text-xs md:text-lg truncate">• {benefit}</li>
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