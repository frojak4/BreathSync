import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import MenuContent from './MenuContent'
import data from '@/lib/exercises.json'


console.log(data)

const Menu = () => {
    return (
        <Carousel className="mx-auto h-full w-4/6 md:w-3/6 lg:w-2/6">
            <CarouselContent className="-ml-4">
                {data.data.map((data, i) => {
                    return <CarouselItem key={i} className="pl-4"> <MenuContent data={data} /></CarouselItem>
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Menu