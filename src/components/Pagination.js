import React from "react"

function Pagination({ decrement, page, increment }) {

    return (
        <div style={{
            backgroundColor: 'black'
        }} className="flex justify-center my-4">
            <div onClick={decrement} className="underline text-white p2 cursor-pointer mx-4 my-4 rounded-l-xl border-blue">
                Previous
            </div>
            <div className="underline p2 text-white my-4 border-blue">
                {page}
            </div>
            <div onClick={increment} className="underline p2 my-4 text-white rounded-r-xl mx-4 cursor-pointer border-blue">
                Next
            </div>
        </div>
    )
}

export default Pagination
