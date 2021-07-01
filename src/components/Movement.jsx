import React from 'react'
import { UseGlobalContext } from './Context-Api'
import { currentUser } from './Navigation';

export const Movement = () => {
    const { movements } = UseGlobalContext();

    // dates printed in formated way
    const formatMovementDate = function (date) {
        const calcDaysPassed = (date1, date2) =>
            Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
        const daysPassed = calcDaysPassed(new Date(), date);


        if (daysPassed === 0) return 'Today';
        if (daysPassed === 2) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} days ago`;

        const day = `${date.getDate()}`.padStart(2, 0);
        const month = `${date.getMonth() + 1}`.padStart(2, 0);;
        const year = date.getFullYear();
        return `${day} /${month}/${year}`

    }
    return (
        <>
            {/* <!-- MOVEMENTS --> */}
            <div className="movements">
                {movements.map((value, index) => {

                    const date = new Date(currentUser.movementsDates[index])
                    const displayDate = formatMovementDate(date);


                    return <div className="movements__row" key={index}>
                        <div className={`movements__type movements__type--${value > 0 ? 'deposit' : 'withdrawal'}`}>{index + 1} {value > 0 ? 'deposit' : 'withdrawal'}</div>
                        <div className="movements__date">{displayDate}</div>
                        <div className="movements__value">{value}$</div>
                    </div>
                })
                }
            </div>
        </>
    )
}
