import { currentUser } from "./Navigation";
import { sortedMovement } from "./Summary";

export function reducer(state, action) {

    if (action.type === 'CHECK_LOGIN') {
        return {
            ...state,
            login: true,
            welcome: `Welcome back, ${currentUser.owner.split(' ')[0]}`,
            currentUser: currentUser,
            balance: currentUser.movements.reduce(function (acc, cur) { return acc + cur }, 0),
            movements: currentUser.movements,
            alert: { status: true, type: 'success', msg: 'logged in successful' },
            movementDates: currentUser.movementsDates,

        }
    }
    if (action.type === 'LOGOUT') {
        return {
            ...state,
            login: false,
            welcome: `let's get started`,
            alert: { status: true, msg: 'logged out', type: 'danger' },

        }
    }
    if (action.type === 'CHECK_BALANCE') {
        return {
            ...state,
            balance: currentUser.movements.reduce(function (acc, cur) { return acc + cur }, 0),
            alert: { status: true, msg: 'transaction succssful', type: 'success' },
            movementDates: currentUser.movementsDates,
        }
    }
    if (action.type === 'UPDATE_MOVEMENTS') {
        return {
            ...state,
            movements: currentUser.movements,
            balance: currentUser.movements.reduce(function (acc, cur) { return acc + cur }, 0),
            movementDates: currentUser.movementsDates,

        }
    }
    if (action.type === 'GET_LOAN') {
        return {
            ...state,
            balance: currentUser.movements.reduce(function (acc, cur) { return acc + cur }, 0),
            alert: { status: true, msg: 'loan approved', type: 'success' }
        }
    }
    if (action.type === 'CLOSE_ACCOUNT') {
        return {
            ...state,
            // accounts: acco/
            login: false,
            alert: { status: true, msg: 'account deleted', type: 'danger' },
            welcome: `let's get started`
        }
    }
    if (action.type === 'TIMER_LOGOUT') {
        return {
            ...state,
            login: false,
        }
    }
    if (action.type === 'SHOW_ALERT') {
        return {
            ...state,
            alert: { status: true, msg: 'invalid username and pin', type: 'danger' }
        }
    }
    if (action.type === 'CLOSE_ALERT') {
        return {
            ...state,
            alert: { status: false, msg: '', type: '' }
        }
    }
    if (action.type === 'SEND_MONEY_MYSELF') {
        return {
            ...state,
            alert: { status: true, msg: `can't send money to yourself`, type: 'danger' }

        }
    }
    if (action.type === 'ACCOUNT_NOT_FOUND') {
        return {
            ...state,
            alert: { status: true, msg: `account not found`, type: 'danger' }

        }
    }
    if (action.type === 'INVALID_USERNAME') {
        return {
            ...state,
            alert: { status: true, msg: `invalid username and pin`, type: 'danger' }

        }
    }
    if (action.type === 'GREATER_AMOUNT') {
        return {
            ...state,
            alert: { status: true, msg: `you don't have enough balance`, type: 'danger' }

        }
    }
    if (action.type === 'INVALID_INPUT') {
        return {
            ...state,
            alert: { status: true, msg: `invalid input`, type: 'danger' }

        }
    }
    if (action.type === 'SORTED_MOVEMENT'){
        return{
            ...state,
            movements: sortedMovement,
        }
    }
    if (action.type === 'ABOVE_LOAN'){
        return {
            ...state, 
            alert: { status: true, msg: `can't take loan above your balance`, type: 'danger' }

        }
    }
    return state;
}