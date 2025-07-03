'use client'

import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const DarkModeButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            {theme === 'light' ? (
                <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setTheme('dark')}
                    className=''
                >
                    <SunIcon className='w-6 h-6 text-foreground' />
                </Button>
            ) : (
                <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setTheme('light')}
                    className=''
                >
                    <MoonIcon className='w-6 h-6 text-foreground' />
                </Button>
            )}
        </>
    )
}

export default DarkModeButton
