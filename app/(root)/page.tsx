import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-4 py-8 flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-bold'>
                    PHS NextJS Starter Template
                </h1>
                <Button variant='default' size='default'>
                    Click me
                </Button>
            </div>
        </section>
    )
}
