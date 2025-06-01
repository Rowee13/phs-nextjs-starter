import Link from 'next/link'

export default function Home() {
    return (
        <section className='flex-grow'>
            <div className='relative isolate px-6 pt-14 lg:px-8'>
                <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                    <div className='text-center'>
                        <h1 className='text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl'>
                            <span className='bg-gradient-to-r from-primary to-cyan-500 bg-clip-text font-extrabold text-transparent'>
                                PHS
                            </span>{' '}
                            NextJS Starter
                        </h1>
                        <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
                            A starter project for PHS using NextJS, TailwindCSS,
                            TypeScript, and Decap CMS for content management.
                        </p>
                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <Link
                                href='/admin'
                                className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                            >
                                Access CMS Admin
                            </Link>
                            <a
                                href='https://decapcms.org/docs/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-sm font-semibold text-foreground hover:text-primary'
                            >
                                Learn about Decap CMS{' '}
                                <span aria-hidden='true'>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
