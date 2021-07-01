import React, { useState } from 'react'
import { UseGlobalContext } from './Context-Api'
export const Operation_Transfer = () => {

    // get userName and transfer amount for transaction
    const [checkAccount, setcheckAccount] = useState('');
    const [transferAmount, setTransferAmount] = useState();

    // get values and function from context API
    const { currentUser, accounts, checkBalance, updateMovement,
        balance, alertSendingMoneyMyself, alertAccountNotFound,
        alertInvalidInput, alertGreaterAmount } = UseGlobalContext();
    let accountFound = false;
    function transferprocess(e) {
        e.preventDefault();

        // checking conditions for transaction
        if (currentUser.username === checkAccount || balance < transferAmount || transferAmount <= 0) {
            // alert('cannot transfer money to your self')
            if (currentUser.username === checkAccount) {
                alertSendingMoneyMyself();
                accountFound = true;

            } else if (balance < transferAmount) {
                alertGreaterAmount();
                accountFound = true;

            } else {

                accountFound = true;
                // alert('invalid input')
                alertInvalidInput();
            }
        } else {    // only run if transaction condition valid 
            accounts.map((acc) => {
                if (acc.username === checkAccount) {
                    acc.movements.unshift(Number(transferAmount))
                    accountFound = true
                    currentUser.movements.unshift(-(Number(transferAmount)))
                    const now = new Date()

                    // Push Date To Sender
                    currentUser.movementsDates.unshift(now.toISOString())

                    // Push Date to Reciever
                    accounts.map((account) => {
                        if (account.username === checkAccount) {
                            account.movementsDates.unshift(now.toISOString())
                        }
                    })
                    checkBalance();
                    updateMovement();
                }
            })
        }

        // account not found condition
        if (!accountFound) {
            // alert('account not found')
            alertAccountNotFound();
        }
        setcheckAccount('');
        setTransferAmount('');

    }
    return (
        <>
            {/* <!-- OPERATION: TRANSFERS --> */}
            <div className="operation operation--transfer">
                <h2>Transfer money</h2>
                <form className="form form--transfer">
                    <input type="text" className="form__input form__input--to"
                        value={checkAccount}
                        onChange={(e) => setcheckAccount(e.target.value)} />
                    <input type="number" className="form__input form__input--amount"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)} />
                    <button className="form__btn form__btn--transfer"
                        onClick={transferprocess}>&rarr;</button>
                    <label className="form__label">Transfer to</label>
                    <label className="form__label">Amount</label>
                </form>
            </div>
        </>
    )
}
