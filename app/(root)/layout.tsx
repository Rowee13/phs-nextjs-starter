import MainFooter from '@/components/footer/main-footer'
import MainHeader from '@/components/header/main-header'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='min-h-screen flex flex-col font-(family-name:--font-outfit)'>
            <MainHeader />
            <main className='grow'>{children}</main>
            <MainFooter />
        </div>
    )
}
