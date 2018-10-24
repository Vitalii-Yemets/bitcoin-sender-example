import React from 'react'
import { connect } from 'react-redux'
import CoinSender from '../../components/CoinSender'
import { setFrom, setTo, setAmount, setFee, sendMessage } from './actions'
import './Root.css'

const Root = ({
  onFromChange,
  onToChange,
  onAmountChange,
  onFeeChange,
  onSendMessage
}) => {

  const coinSenderProps = {
    onFromChange,
    onToChange,
    onAmountChange,
    onFeeChange,
    onSendMessage
  }

  return (
    <div className='App'>
      <CoinSender {...coinSenderProps} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onFromChange: evt => {
    debugger
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault()
    }
    dispatch(setFrom(evt.currentTarget.value))
  },
  onToChange: evt => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault()
    }
    dispatch(setTo(evt.currentTarget.value))
  },
  onAmountChange: evt => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault()
    }
    dispatch(setAmount(evt.currentTarget.value))
  },
  onFeeChange: evt => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault()
    }
    dispatch(setFee(evt.currentTarget.value))
  },
  onSendMessage: () => dispatch(sendMessage())
})

export default connect(null, mapDispatchToProps)(Root);
