import React from 'react'
import { ModeToggle } from './ThemeSwitcher'
import { aleo } from '@/fonts'
import { MdOutlineAir } from "react-icons/md";

const Header = () => {
    return (
        <div className="flex justify-evenly bg-primary-foreground py-2">
            <span className="flex">
                <h1 className={`${aleo.variable} text-2xl font-aleo`}>BreathSync</h1>
                <MdOutlineAir className="text-2xl" />
            </span>
            <ModeToggle />
        </div>
    )
}

export default Header