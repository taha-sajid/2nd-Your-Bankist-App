import React, { useState } from 'react'
import { UseGlobalContext } from './Context-Api'


export const Operation_Close = () => {

    // get credentials for close account
    const [userName, setUserName] = useState('')
    const [userPin, setUserPin] = useState('')
    const { closeAccount, accounts, currentUser, alertInvalidUserName  } = UseGlobalContext();

    function close(e) {
        e.preventDefault();
        if (currentUser.username === userName && currentUser.pin === Number(userPin)) {
            const index = accounts.findIndex(acc=>acc.username === currentUser.username)
            accounts.splice(index,1)
            closeAccount();

        }else{
            // alert('invalid userName or pin')
            alertInvalidUserName();
            console.log(accounts)
        }
        setUserName('');
        setUserPin('');
    }
    return (
        <>
            {/* <!-- OPERATION: CLOSE --> */}
            <div className="operation operation--close">
                <h2>Close account</h2>
                <form className="form form--close">
                    <input type="text" className="form__input form__input--user"
                       value={userName}
                       onChange={(e) => { setUserName(e.target.value) }} />

                    <input
                        type="password"
                        maxlength="6"
                        className="form__input form__input--pin"
                        value={userPin}
                        onChange={(e) => { setUserPin(e.target.value) }}
                    />
                    <button className="form__btn form__btn--close" onClick={close}>&rarr;</button>
                    <label className="form__label">Confirm user</label>
                    <label className="form__label">Confirm PIN</label>
                </form>
            </div>

        </>
    )
}
