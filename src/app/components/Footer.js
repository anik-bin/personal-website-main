import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="container-footer">
                <div className="footer-logos">
                    <a target="_blank" href="https://github.com/anik-bin"><i className="fa-brands fa-github"
                        style={{ "color": "#000000" }}></i></a>
                    <a target="_blank" href="https://twitter.com/aniketbindhani"><i className="fa-brands fa-twitter"
                        style={{ "color": "#000000" }}></i></a>
                    <a target="_blank" href="mailto:me@aniketbindhani.com"><i className="fa-regular fa-envelope"
                        style={{ "color": "#000000" }}></i></a>
                </div>

                <div style={{ "fontSize": "14px" }}>
                    Copyright © 2023 Aniket Bindhani, All rights reserved.
                </div>
            </footer>
        </>
    )
}
