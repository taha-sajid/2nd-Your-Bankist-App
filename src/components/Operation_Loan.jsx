import React, { useState } from 'react'
import { UseGlobalContext } from './Context-Api'
import { currentUser } from './Navigation'
export const Operation_Loan = () => {
    const [loanAmount, setLoanAmount] = useState()

    const { getLoan, balance, alertAboveLoan, alertInvalidInput } = UseGlobalContext();
  
    function loan(e) {

        e.preventDefault();
        if (loanAmount < balance) {
            if (loanAmount > 0) {
                currentUser.movements.unshift(Number(loanAmount));
                currentUser.movementsDates.unshift(new Date().toISOString())
                getLoan();
            }else{

                alertInvalidInput();
            }

        }
        else {
            // alert(`can't take loan above your current balance`)
            alertAboveLoan();
        }
        setLoanAmount('');
    }
    return (
        <>

            {/* <!-- OPERATION: LOAN --> */}
            <div className="operation operation--loan">
                <h2>Request loan</h2>
                <form className="form form--loan">
                    <input type="number" className="form__input form__input--loan-amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)} />
                    <button className="form__btn form__btn--loan" onClick={loan}>&rarr;</button>
                    <label className="form__label form__label--loan">Amount</label>
                </form>
            </div>

        </>
    )
}
