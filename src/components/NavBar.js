import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div style={{
            backgroundColor: 'black'
        }} className="flex space-x-8 font-bold items-center pl-3 py-4">
            <Link to={"/"}>
                <h3 className="text-xl text-white">Movies</h3>
            </Link>
            <Link to={"watchlist"}>
                <h3 className="text-xl text-white">WatchList</h3>
            </Link>
        </div>
    )
}

export default NavBar
