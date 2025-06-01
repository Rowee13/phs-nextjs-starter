import { ThemeProvider } from 'next-themes'

import MainFooter from '@/components/footer/main-footer'
import MainHeader from '@/components/header/main-header'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='min-h-screen flex flex-col font-[family-name:var(--font-outfit)]'>
            <ThemeProvider
                attribute='class'
                defaultTheme='dark'
                enableSystem={false}
                disableTransitionOnChange
            >
                <MainHeader />
                <main className='flex-grow'>{children}</main>
                <MainFooter />
            </ThemeProvider>
        </div>
    )
}
