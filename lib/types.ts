
type Step = {
    type: string,
    time: number,
    text: string
}

export type ExerciseType = {
    name: string,
    urlname: string,
    benefits: string[],
    steps: Step[],
    color: string
}