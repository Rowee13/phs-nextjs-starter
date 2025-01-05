import type { Metadata } from 'next'
import { Outfit, Rubik_Vinyl } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import { siteConfig } from '@/constant/config'

import '../styles/globals.css'

const rubikVinyl = Rubik_Vinyl({
    variable: '--font-rubik-vinyl',
    weight: '400',
    subsets: ['latin'],
})

const outfit = Outfit({
    variable: '--font-outfit',
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning={true}>
            <body
                className={`${rubikVinyl.variable} ${outfit.variable} antialiased`}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='light'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
