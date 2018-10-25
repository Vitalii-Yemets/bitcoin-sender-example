import React from 'react'
import { connect } from 'react-redux'
import CoinSender from '../../components/CoinSender'
import {
  setFrom,
  setTo,
  setAmount,
  setFee,
  sendMessage,
  closeErrorModal,
  closeSuccessModal
} from './actions'
import ErrorModal from '../../components/ErrorModal'
import SuccessModal from '../../components/SuccessModal'
import './Root.css'

const Root = ({
  from,
  to,
  amount,

  onFromChange,
  onToChange,
  onAmountChange,
  onFeeChange,
  onSendMessage,

  onCloseErrorModal,
  onCloseSuccessModal,

  isShowSuccessModal,
  isShowErrorModal,
  requestDetails
}) => {

  const errorModalProps = {
    onCloseErrorModal,
    isShowErrorModal,
    requestDetails
  }

  const successModalProps = {
    onCloseSuccessModal,
    isShowSuccessModal,
    requestDetails
  }

  const coinSenderProps = {
    from,
    to,
    amount,

    onFromChange,
    onToChange,
    onAmountChange,
    onFeeChange,
    onSendMessage
  }

  return (
    <div className='App'>
      <ErrorModal {...errorModalProps} />
      <SuccessModal {...successModalProps} />
      <CoinSender {...coinSenderProps} />
    </div>
  )
}

const mapStateToProps = state => ({
  from: state.rootState.from,
  to: state.rootState.to,
  amount: state.rootState.amount,

  isShowSuccessModal: state.rootState.isShowSuccessModal,
  isShowErrorModal: state.rootState.isShowErrorModal,
  requestDetails: state.rootState.requestDetails,
})

const mapDispatchToProps = dispatch => ({
  onFromChange: evt => {
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
  onSendMessage: () => dispatch(sendMessage()),
  onCloseErrorModal: () => dispatch(closeErrorModal()),
  onCloseSuccessModal: () => dispatch(closeSuccessModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);
