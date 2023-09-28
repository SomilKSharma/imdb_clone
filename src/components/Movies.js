import React from "react"

function Movies() {
    return (
        <div>
            {/* div for heading */}
            <div className="text-2xl md:text-3xl mb-8 font-bold text-center">
                Trending Movies
            </div>
            {/* div for the cards */}
            <div className="flex">
                {/* need to repeat this div */}
                <div className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end" style={{
                    backgroundImage: `url()`
                }}></div>
                <div className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end" style={{
                    backgroundImage: `url()`
                }}></div>
            </div>
        </div>
    )
}

export default Movies
