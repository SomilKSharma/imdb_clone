import axios from "axios"
import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"

function Movies() {
    // get a use state
    const [movie, setMovie] = useState([])
    // get page counter
    const [page, setPage] = useState(1)
    const [watch, setWatch] = useState(() => {
        const storedWatchlist = localStorage.getItem('watchThese');
        return storedWatchlist ? JSON.parse(storedWatchlist) : [];
    });

    // function to change  page
    function increment() {
        setPage(page + 1)
    }
    function decrement() {
        if (page > 2) {
            setPage(page - 1)
        }
    }
    // function to add into watchlist
    function addWatchList(element) {
        setWatch([...watch, element])
    }
    // function to remove from watchlist
    function removeWatchList(element) {
        setWatch(watch.filter(elem => elem.id !== element.id))
    }
    // use effect to update local localStorage
    useEffect(() => {
        localStorage.setItem('watchThese', JSON.stringify(watch));
    }, [watch])


    // use axios for handling API as a promise
    // use effect to change api call with change in page
    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=23d8144f5bdbf96f4fd1af22d6e25a5e&page=${page}`
        ).then((res) => {
            setMovie(res.data.results)
        })
    }, [page])
    // map evey movie in the array movie
    return (
        <div style={{
            backgroundColor: 'black'
        }}>
            {/* div for heading */}
            <div className="text-2xl md:text-3xl mb-8 pt-8 font-bold underline text-white text-center">
                Trending Movies
            </div>
            {/* div for the cards */}
            <div className="flex flex-wrap">
                {/* need to repeat this div */}
                {movie.map((element) => {
                    return (
                        <div key={element.id} className="w-[200px] h-[40vh] bg-center bg-cover rounded-xl m-10 md:h[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end" style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${element.poster_path})`,
                            boxShadow: '10px 10px 20px rgba(255, 0, 0)'
                        }}>
                            {/* component for watchlist */}
                            <div
                                onClick={() => {
                                    console.log('Clicked on element:', element);
                                    if (watch.some((watchedElement) => watchedElement.id === element.id)) {
                                        console.log('Removing from watchlist');
                                        removeWatchList(element);
                                    } else {
                                        console.log('Adding to watchlist');
                                        addWatchList(element);
                                    }

                                }
                                }
                                className="p-2 bg-white cursor-pointer rounded-xl absolute right-2 top-2"
                            >
                                {watch.some((watchedElement) => watchedElement.id === element.id) ? `❌` : `🥰`}
                            </div>
                            {/* component for title at the bottom of the card */}
                            <div className="text-center w-full bg-gray-900 text-white font-bold">
                                {element.title}
                                {console.log(watch)}
                            </div>

                        </div>
                    )
                }
                )
                }
            </div>
            {/* get Pagination */}
            <Pagination decrement={decrement} page={page} increment={increment} />
        </div >
    )
}

export default Movies
