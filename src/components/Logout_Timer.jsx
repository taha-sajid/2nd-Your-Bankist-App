import React, { useState } from 'react'

export const Logout_Timer = () => {
    // const [time, setTime] = useState()
    // setInterval(() => {
    //     setTime(time - 1);
    // }, 1000);
    return (
        <>
            {/* <!-- LOGOUT TIMER --> */}
            <p className="logout-timer">
                You will be logged out in <span className="timer">05:00</span>
            </p>
        </>
    )
}
