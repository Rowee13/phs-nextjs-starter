import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-4 py-8 flex flex-col justify-center items-center'>
                <h2>Home page</h2>
                <Button variant='default' size='default'>
                    Click me
                </Button>
            </div>
        </section>
    )
}
