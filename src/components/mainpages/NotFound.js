import React, { useEffect, useState } from 'react'

function NotFound() {
    const [state, setstate] = useState(<div className="spinner-box">
    <div className="blue-orbit leo">
    </div>

    <div className="green-orbit leo">
    </div>
    
    <div className="red-orbit leo">
    </div>
    
    <div className="white-orbit w1 leo">
    </div><div className="white-orbit w2 leo">
    </div><div className="white-orbit w3 leo">
    </div>
  </div>)

useEffect(() => {
    setTimeout(() => {
        setstate(<div>
            <h1>404 Page was not found</h1>
            <img src="https://www.redditstatic.com/reddit404c.png" alt="404 page"/>
        </div>)
    }, 2000);
    
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
