import React from 'react'
import './App.css';
import Navigation from './components/Navigation';
import { Balance } from './components/Balance';
import { Movement } from './components/Movement';
import { Summary } from './components/Summary';
import { Operation_Transfer } from './components/Operation_Transfer';
import { Operation_Loan } from './components/Operation_Loan';
import { Operation_Close } from './components/Operation_Close';
import { Logout_Timer } from './components/Logout_Timer';
import { LogOut } from './components/LogOut';
import { UseGlobalContext } from './components/Context-Api';
function App() {

  const { login, alert, closeAlert } = UseGlobalContext();
  const show = alert.status;

  if (show) {
    setTimeout(() => {
      closeAlert();
    }, 3000);
  }



  return (
    <>
      {show && <p className={`alert alert-${alert.type}`}>{alert.msg}</p>}
      <Navigation />
      {login && <main className="app">
        <Balance />
        <Movement />
        <Summary />
        <Operation_Transfer />
        <Operation_Loan />
        <Operation_Close />
        <Logout_Timer />
        <LogOut />

      </main>}
    </>
  );
}

export default App;
