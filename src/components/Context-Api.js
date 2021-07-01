import React, { useContext, useReducer } from 'react'
import { accounts } from './data';
// import { currentUser } from './Navigation';
import { reducer } from './reducer';


const initialState = {
    login: false,
    accounts: accounts,
    currentUser: [],
    movements: [],
    welcome: `let's get started`,
    balance: 0,
    accounts: accounts,
    alert: { status: false, msg: '', type: '' },
    movementDates: [],
}
const AppContext = React.createContext();
function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    function checkLogging() {
        dispatch({ type: 'CHECK_LOGIN' })
    }
    function logout() {
        dispatch({ type: 'LOGOUT' })
    }
    function checkBalance() {
        dispatch({ type: 'CHECK_BALANCE' });
    }
    function updateMovement() {
        dispatch({ type: 'UPDATE_MOVEMENTS' })
    }
    function getLoan() {
        dispatch({ type: 'GET_LOAN' });
    }
    function closeAccount() {
        dispatch({ type: 'CLOSE_ACCOUNT' })
    }
    function timerLogout() {
        dispatch({ type: 'TIMER_LOGOUT' })
    }
    function showAlert() {
        dispatch({ type: 'SHOW_ALERT' })
    }
    function closeAlert() {
        dispatch({ type: 'CLOSE_ALERT' })
    }
    function alertSendingMoneyMyself(){
        dispatch({type: 'SEND_MONEY_MYSELF'})
    }
    function alertAccountNotFound(){
        dispatch({type: 'ACCOUNT_NOT_FOUND'})
    }
    function alertInvalidUserName(){
        dispatch({type: 'INVALID_USERNAME'});
    }
    function alertGreaterAmount(){
        dispatch({type:'GREATER_AMOUNT'})
    }
    function alertInvalidInput(){
        dispatch({type: 'INVALID_INPUT'})
    }
    function movementSorted(){
        dispatch({type:'SORTED_MOVEMENT'})
    }
    return <AppContext.Provider value={{
        ...state, checkLogging, logout, updateMovement, checkBalance,
        getLoan, closeAccount, timerLogout, showAlert, closeAlert,
        alertSendingMoneyMyself, alertAccountNotFound, alertInvalidUserName,
        alertGreaterAmount, alertInvalidInput,movementSorted
   }}>
        {children}
    </AppContext.Provider>
}

function UseGlobalContext() {
    return useContext(AppContext);
}

export {
    AppProvider,
    UseGlobalContext
}