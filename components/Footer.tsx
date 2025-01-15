import { aleo } from '@/fonts'
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 bg-primary-foreground w-screen p-2 text-center">
            <span className="flex justify-around">
                <h3 className={`${aleo.variable} font-aleo text-sm`}>Made by Frode Jakobsen, 2025</h3>
                <ul className="flex items-center justify-center text-xl gap-4 text-slate-400">
                    <Link href={'https://github.com/frojak4'}>
                        <FaGithub />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/frode-offerdal-jakobsen-b98b24322/'}>
                        <FaLinkedin />
                    </Link>
                </ul>
            </span>
        </footer>
    )
}

export default Footer