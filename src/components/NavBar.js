import React from "react"

function NavBar() {
    return (
        <div className="flex border space-x-8 items-center pl-3 py-4">
            <h3 className="text-blue-400">Movies</h3>
            <h3 className="text-blue-400">WatchList</h3>
        </div>
    )
}

export default NavBar