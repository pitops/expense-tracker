import React from 'react'
import './App.css'
import { Header } from './components/Layout/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses.js'
import { TransactionList } from './components/Transaction/TransactionList'
import { AddTransaction } from './components/Transaction/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

function App () {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
