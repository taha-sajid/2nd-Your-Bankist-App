import React from 'react'
import { UseGlobalContext } from './Context-Api'


export const Balance = () => {
    const {balance} = UseGlobalContext();
    
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2,0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);;
    const year =now.getFullYear();
    const hour =`${now.getHours()}`.padStart(2,0);
    const min = `${now.getMinutes()}`.padStart(2,0); 

    return (
        <>
            {/* <!-- BALANCE --> */}
            <div className="balance">
                <div>
                    <p className="balance__label">Current balance</p>
                    <p className="balance__date">
                        As of <span className="date">{`${day}/${month}/${year}, ${hour}:${min}`}</span>
                    </p>
                </div>
                <p className="balance__value">{balance}$</p>
            </div>
        </>
    )
}
