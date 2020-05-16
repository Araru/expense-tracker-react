import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import {IncomeExpences} from './Components/IncomeExpences';
import {TransactionList} from './Components/TransactionList';
import {AddTransaction} from './Components/AddTranscation';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
