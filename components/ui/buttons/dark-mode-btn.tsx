'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

// The icon swap rides on the `.dark` class next-themes sets on <html> before
// paint, so there is no mount gate and nothing to hydrate-mismatch.
const DarkModeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <Button
            variant='ghost'
            size='icon'
            aria-label='Toggle theme'
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
        >
            <SunIcon className='w-6 h-6 text-foreground dark:hidden' />
            <MoonIcon className='hidden w-6 h-6 text-foreground dark:block' />
        </Button>
    )
}

export default DarkModeButton
