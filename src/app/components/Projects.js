import React from 'react'
import Script from 'next/script'

export default function Projects() {
    return (
        <>
            <div className="my-projects">
                <h1>My Projects</h1>
                <div className="my-projects-work">
                    <div className="work">
                        <img src="/images/project_images/work-1.jpeg" alt="" />
                        <div className="layer">
                            <a href="https://youtu.be/HjRZWtGhyu8" target="_blank"><h3>NewsFusion</h3></a>
                            <p>Get your daily dose of news for free</p>
                        </div>
                    </div>

                    <div className="work">
                        <img src="/images/project_images/work-2.jpeg" alt="" />
                        <div className="layer">
                            <a href="https://anik-bin.github.io/textutils/" target="_blank"><h3>Text Metrics</h3></a>
                            <p>The website allows users to input text and instantly view the word count and character count of their input</p>
                        </div>
                    </div>

                    <div className="work">
                        <img src="/images/project_images/work-3.jpeg" alt="" />
                        <div className="layer">
                            <a href="https://anik-bin.github.io/Memory-Game/" target="_blank"><h3>Memory Game</h3></a>
                            <p>A simple memory game in which you have to select two tiles having the same image</p>
                        </div>
                    </div>

                    <div className="work">
                        <img src="/images/project_images/work-4.jpeg" alt="" />
                        <div className="layer">
                            <a href="https://github.com/anik-bin/notesdirectory-frontend" target="_blank"><h3>Notes Directory</h3></a>
                            <p>Store notes on the cloud and access them anywhere you want</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
