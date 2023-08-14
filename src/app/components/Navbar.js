import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className="nav-header">
                <a className="nav-header-heading" href="/">Aniket Bindhani</a>
                <div className="nav-header-links">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link target="_blank" href="https://blog.aniketbindhani.com">Blog</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
