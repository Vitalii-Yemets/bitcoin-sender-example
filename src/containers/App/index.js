import React from 'react'
import { connect } from 'react-redux'
import CoinSender from '../../components/CoinSender'
import './App.css'

const App = ({ from }) => {
  return (
    <div className='App'>
      <CoinSender />
    </div>
  )
}

const mapStateToDispatch = state => ({
  from: state.from
})

export default connect(mapStateToDispatch, null)(App);
