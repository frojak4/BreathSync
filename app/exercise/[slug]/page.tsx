import Exercise from '@/components/Exercise'
import data from '@/lib/exercises.json'
import React from 'react'

const ExercisePage = async ({ params }) => {

    const { slug } = await params
    const exercise = data.data.find(exercise => exercise.urlname === slug)
    return (
        <div>{!exercise ? 'Exercise not found' : <Exercise data={exercise} />}</div>
    )
}

export default ExercisePage