import React from 'react'
import { connect } from 'react-redux'
import CoinSender from '../../components/CoinSender'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <CoinSender />
    </div>
  )
}

export default App;
