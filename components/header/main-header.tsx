import Link from 'next/link'

const MainHeader = () => {
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
                        <li className='px-2 py-1'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='px-2 py-1'>
                            <Link href='/components'>Components</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainHeader
