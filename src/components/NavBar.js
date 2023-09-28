import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="flex border space-x-8 items-center pl-3 py-4">
            <Link to={"/"}>
                <h3 className="text-xl text-blue-400">Movies</h3>
            </Link>
            <Link to={"watchlist"}>
                <h3 className="text-xl text-blue-400">WatchList</h3>
            </Link>
        </div>
    )
}

export default NavBar
