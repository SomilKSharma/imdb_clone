import React, { useEffect, useState } from "react"

function WatchList() {
    // create a state
    const [moviesArray, setMoviesArray] = useState([])
    // search for values in the array
    const [search, setSearch] = useState('')


    // useEffect hook to store local localStorage
    useEffect(() => {
        setMoviesArray(JSON.parse(localStorage.getItem('watchThese')))
    }, [])


    // write a function to sort the array
    function ratingSort(direction) {
        setMoviesArray((prevMoviesArray) => {
            return [...prevMoviesArray].sort((objA, objB) => {
                if (direction === 1) {
                    return objB.vote_average - objA.vote_average;
                } else {
                    return objA.vote_average - objB.vote_average;
                }
            });
        });
    }

    function popSort(direction) {
        setMoviesArray((prevMoviesArray) => {
            return [...prevMoviesArray].sort((objA, objB) => {
                if (direction === 1) {
                    return objB.popularity - objA.popularity;
                } else {
                    return objA.popularity - objB.popularity;
                }
            });
        });
    }

    // update local storage on deletion
    function deleteStorage(element) {
        setMoviesArray((prevMoviesArray) => {
            return [...prevMoviesArray].filter((elem) =>
                element.id !== elem.id)
        })
    }
    // useEffect hook to update local storage whenever moviesArray changes
    useEffect(() => {
        localStorage.setItem('watchThese', JSON.stringify(moviesArray));
    }, [moviesArray]);

    // Create a filteredMovies array based on the search input
    const filteredMovies = moviesArray.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="text-center">
                <input type='text'
                    className="border-4 rounded bg-black text-white text-center p-1 m-2"
                    placeholder="Search"
                    value={search}
                    onChange={(element) =>
                        setSearch(element.target.value)}
                />
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full font-2xl border-collapse bg-black text-left text-white" style={{
                    boxShadow: '10px 10px 50px rgba(255, 0, 0)'
                }} >
                    {/* get the table head */}
                    <thead>
                        <tr>
                            <th className="px-6 py-4 font-medium">Name</th>
                            <th>
                                <div className="flex px-3">
                                    <div onClick={
                                        () => ratingSort(1)
                                    } style={{ cursor: "pointer" }}>
                                        ⇧
                                    </div>
                                    <div>
                                        Rating
                                    </div>
                                    {/* button for sorting */}
                                    <div onClick={
                                        () => ratingSort(-1)
                                    } style={{ cursor: "pointer" }}>
                                        ⇩
                                    </div>

                                </div>
                            </th>
                            <th>
                                <div className="flex px-3">
                                    <div onClick={
                                        () => popSort(1)
                                    } style={{ cursor: "pointer" }}>
                                        ⇧
                                    </div>
                                    <div>
                                        Popularity
                                    </div>
                                    {/* button for sorting */}
                                    <div onClick={
                                        () => popSort(-1)
                                    } style={{ cursor: "pointer" }}>
                                        ⇩
                                    </div>

                                </div>
                            </th>
                            <th>
                                <button>Delete</button>
                            </th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="divide-y divide-white-100 border-t border-white-100">
                        {/* map through the movies array */}
                        {filteredMovies.map((element) => {
                            return (
                                <tr key={element.id} className="hover:bg-white-50">
                                    <td className="flex items-center px-6 py-4 font-normal text-white-900 space-x-2">
                                        <img className="h-[15rem] w-[10rem] object-fit" alt="A poster" src={`https://image.tmdb.org/t/p/original/t/p/w500/${element.poster_path}`} />
                                        <div>{element.title}</div>
                                    </td>
                                    <td className="px-2 pl-4 py-4">
                                        {element.vote_average}
                                    </td>
                                    <td className="px-2 pl-4 py-4">
                                        {element.popularity}
                                    </td>
                                    <td
                                        onClick={() => deleteStorage(element)}
                                        className="pl-3" style={{ cursor: "pointer" }}>
                                        ❌
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchList
