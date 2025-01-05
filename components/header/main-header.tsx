'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import DarkModeButton from '@/components/ui/buttons/dark-mode-btn'

import { NAV_LINKS } from '@/constant/nav-links'

const MainHeader = () => {
    const pathname = usePathname()

    return (
        <header>
            <div className='flex flex-row justify-between items-center max-w-7xl mx-auto px-4 py-8'>
                <div>
                    <h1 className='text-2xl font-[family-name:var(--font-rubik-vinyl)]'>
                        PHS NextJS Starter
                    </h1>
                </div>
                <nav>
                    <ul className='flex flex-row space-x-6'>
                        {NAV_LINKS.map((link) => (
                            <li
                                key={link.href}
                                className={`px-2 py-1 ${pathname === link.href ? 'font-bold text-cyan-500' : 'hover:underline'} `}
                            >
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                        <li>
                            <DarkModeButton />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainHeader
