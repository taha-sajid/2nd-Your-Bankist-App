import { React, useState } from 'react'
import logo from '../images/logo.png';
import { UseGlobalContext } from './Context-Api';
import { accounts } from './data';

export let currentUser = accounts[0];

function Navigation() {

    // get userName and Pin for logged in
    const [userName, setUserName] = useState('')
    const [userPin, setUserPin] = useState('')
    const { checkLogging, welcome, showAlert } = UseGlobalContext();
    
    
    // flag variable for displaying alert msg if username or pin is wrong
    let alertmsg = true;

    // create userName
    const createUserName = function (acc) {
        acc.map(account => {
            const names = account.owner.toLowerCase().split(' ').map((name) => name[0]).join('')
            account.username = names;
        })
    }
    createUserName(accounts)

    // run for get userName and Pin if userClick on submit
    function getUser(e) {
        e.preventDefault();

        accounts.map((acc) => {

            if (acc.username === userName && acc.pin === Number(userPin)) {
             
                currentUser = acc;
                alertmsg = false;
               
                checkLogging();
            }

        })

        if (alertmsg) {
            // alert('invalid username and password ')
            showAlert();
        }
        setUserName('');
        setUserPin('');
    }
    return (
        <>
            {/* <!-- TOP NAVIGATION --> */}
            <nav>
                <p className="welcome">{welcome}</p>
                <img src={logo} alt="Logo" className="logo" />
            <form className="login">
                    <input
                        type="text"
                        placeholder="user"
                        className="login__input login__input--user"
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    {/* <!-- In practice, use type="password" --> */}
                    <input
                        type="text"
                        placeholder="PIN"
                        maxlength="4"
                        className="login__input login__input--pin"
                        value={userPin}
                        onChange={(e) => { setUserPin(e.target.value) }}

                    />
                    <button className="login__btn" onClick={getUser}>&rarr;</button>
                </form>
                
                    
            </nav>


        </>
    )
}


export default Navigation;