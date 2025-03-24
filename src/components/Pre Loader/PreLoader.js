import React, { useEffect, useState } from 'react'
import '../Pre Loader/PreLoader.css'
import loader from '../../assets/loader.gif'

function PreLoader() {

    const quotes = [
        "Loading Creativity... Almost There!",
        "Tech Fact: JavaScript is the most popular programming language!",
        "We’re just ‘div’-ing into it!",
        "Innovating One Pixel at a Time... Please Wait!",
        "Hello! Preparing Something Special for You...",
        "Unveiling My Latest Creations... Just a Moment!",
        "The best way to predict the future is to invent it. - Alan Kay",
        "Bringing My Portfolio to Life... One Second!",
        "Arranging Pixels Perfectly... Please Wait!",
        "Preparing Your Window to My World... Hang Tight!"
    ]

    const [index, setIndex] = useState(4);

    useEffect(() => {
        setIndex(Math.floor(Math.random() * quotes.length));
    }, []);

    return (
        <div className="preloader">
            <div class="loader"></div>
            <div className='loader-text'>
                {quotes[index]}
            </div>
        </div>
    )
}

export default PreLoader
