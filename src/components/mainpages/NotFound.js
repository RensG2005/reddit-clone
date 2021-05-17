import React, { useEffect, useState } from 'react'
import Loader from "../Loader";

function NotFound() {
    const [state, setstate] = useState(<Loader />)

useEffect(() => {
    setTimeout(() => {
        setstate(<div>
            <h1>404 Page was not found</h1>
            <img src="https://www.redditstatic.com/reddit404c.png" alt="404 page"/>
        </div>)
    }, 5000);
    
    return () => {
        setstate("")
    }
}, [])

    return (
        <div>
            {state}
        </div>
    )
}

export default NotFound
