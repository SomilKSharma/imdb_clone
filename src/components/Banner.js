import React from "react"

function Banner() {
    return (
        <div className="h-[20vh] bg-no-repeat cover bg-center items-end flex md:h-[60vh]" style={{
            backgroundImage: `url(./jawan.jpg)` // Use "./" for the current directory
        }}>
            <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 w-full text-center">
                Pathaan
            </div>
        </div>

    )
}

export default Banner
