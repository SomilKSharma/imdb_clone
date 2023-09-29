import React from "react"

function WatchList() {

    // movies array dummy
    const moviesArray = []
    return (
        <div style={{
            backgroundColor: 'black'
        }} className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table style={{
                boxShadow: '10px 10px 20px rgba(255, 0, 0)'
            }} className="w-full font-2xl border-collapse bg-black text-left text-white">
                {/* get the table head */}
                <thead>
                    <tr>
                        <th className="px-6 py-4 font-medium">Name</th>
                        <th>
                            <div className="flex ">
                                <div>
                                    Rating
                                </div>
                            </div>
                        </th>
                        <th>
                            <div>
                                Popularity
                            </div>
                        </th>
                        <th>
                            <div>
                                Genres
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
                    {moviesArray.map((element) => {
                        return (
                            <tr className="hover:bg-white-50">
                                <td className="flex items-center px-6 py-4 font-normal text-white-900 space-x-2">
                                    <img className="h-[6rem] w-[10rem] object-fit" alt="A poster" src={`https://image.tmdb.org/t/p/original/t/p/w500/${element.poster_path}`} />
                                    <div>{element.title}</div>
                                </td>
                                <td className="px-2 pl-4 py-4">
                                    {element.vote_average}
                                </td>
                                <td className="px-2 pl-4 py-4">
                                    {element.popularity}
                                </td>
                                <td className="px-1 py-4">
                                    Comdey
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default WatchList
