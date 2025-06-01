'use client'

import { useEffect } from 'react'

export default function AdminPage() {
    useEffect(() => {
        // Load the Tina admin interface
        const script = document.createElement('script')
        script.type = 'module'
        script.src = 'http://localhost:4001/src/main.tsx'
        script.onload = () => {
            console.log('Tina admin loaded')
        }
        script.onerror = () => {
            console.error('Failed to load Tina admin')
            // Fallback: redirect to static admin
            window.location.href = '/admin/index.html'
        }
        document.head.appendChild(script)

        // Add the required CSS class
        document.body.classList.add('tina-tailwind')

        return () => {
            document.body.classList.remove('tina-tailwind')
        }
    }, [])

    return (
        <div>
            <div id='root'></div>
            <noscript>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1>Tina CMS Admin</h1>
                    <p>JavaScript is required to run the admin interface.</p>
                    <p>
                        <a href='/admin/index.html'>
                            Try the static admin interface
                        </a>
                    </p>
                </div>
            </noscript>
        </div>
    )
}
