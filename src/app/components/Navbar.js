import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className="nav-header">
                <h2 className="nav-header-heading">Aniket Bindhani</h2>
                <div className="nav-header-links">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link target="_blank" href="https://aniketbindhani.hashnode.dev/">Blog</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
