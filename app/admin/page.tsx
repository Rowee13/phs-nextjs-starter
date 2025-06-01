'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'

interface DecapCMS {
    init: (config?: Record<string, unknown>) => void
}

declare global {
    interface Window {
        CMS: DecapCMS
    }
}

export default function AdminPage() {
    const [cmsLoaded, setCmsLoaded] = useState(false)

    useEffect(() => {
        // Add custom styles and navigation when CMS loads
        if (cmsLoaded && typeof window !== 'undefined') {
            // Add custom CSS for the homepage button
            const style = document.createElement('style')
            style.textContent = `
                .homepage-button {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 10000;
                    background: #1976d2;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 12px 20px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                    transition: all 0.2s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .homepage-button:hover {
                    background: #1565c0;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                }
                .homepage-button:active {
                    transform: translateY(0);
                }
                .homepage-icon {
                    width: 16px;
                    height: 16px;
                }
            `
            document.head.appendChild(style)

            // Create and add the homepage button
            const button = document.createElement('a')
            button.href = '/'
            button.className = 'homepage-button'
            button.innerHTML = `
                <svg class="homepage-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
                Go to Homepage
            `
            button.title = 'Return to main website'
            document.body.appendChild(button)

            // Cleanup function
            return () => {
                if (document.head.contains(style)) {
                    document.head.removeChild(style)
                }
                if (document.body.contains(button)) {
                    document.body.removeChild(button)
                }
            }
        }
    }, [cmsLoaded])

    return (
        <>
            {/* Decap CMS with DecapBridge Authentication */}
            <Script
                src='https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
                strategy='afterInteractive'
                onLoad={() => {
                    console.log(
                        'Decap CMS loaded with DecapBridge authentication'
                    )
                    setCmsLoaded(true)
                }}
            />

            {/* Loading state before CMS loads */}
            {!cmsLoaded && (
                <div className='flex items-center justify-center min-h-screen bg-gray-50'>
                    <div className='text-center'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                        <p className='text-gray-600'>
                            Loading Content Management System...
                        </p>
                        <p className='text-sm text-gray-500 mt-2'>
                            Powered by DecapBridge Authentication
                        </p>
                        <Link
                            href='/'
                            className='inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                        >
                            ← Back to Homepage
                        </Link>
                    </div>
                </div>
            )}

            {/* CMS will mount here */}
            <div id='nc-root'></div>
        </>
    )
}
