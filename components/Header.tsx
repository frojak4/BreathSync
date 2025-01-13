import React from 'react'
import { ModeToggle } from './ThemeSwitcher'
import { aleo } from '@/fonts'
import { MdOutlineAir } from "react-icons/md";
import Link from 'next/link';

const Header = () => {
    return (
        <div className="flex justify-evenly bg-primary-foreground py-2">
            <Link href={'/'} className="flex">
                <h1 className={`${aleo.variable} text-2xl font-aleo`}>BreathSync</h1>
                <MdOutlineAir className="text-2xl" />
            </Link>
            <ModeToggle />
        </div>
    )
}

export default Header