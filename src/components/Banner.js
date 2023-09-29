import React from "react"

function Banner() {
    return (
        <div className="h-[30vh] md:h-[70vh] bg-center bg-no-repeat bg-cover items-end" style={{
            backgroundColor: 'black',
            backgroundImage: 'url(https://www.themoviedb.org/t/p/original/w4mPBAfZS5yIXOcqEiEOL8fnuQG.jpg)',
            backgroundPosition: 'center center', // Adjusted background position
            backgroundSize: 'cover',
            boxShadow: '10px 10px 50px rgba(255, 0, 0)'
        }}>

        </div>

    )
}

export default Banner
