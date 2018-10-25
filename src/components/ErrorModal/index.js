import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'

const ErrorModal = ({ isShowErrorModal, requestDetails, onCloseErrorModal }) => {
	const message = requestDetails ? requestDetails.message : ''
	return (
		<Modal isOpen={isShowErrorModal}>
			<ModalHeader>
				Error info
			</ModalHeader>
			<ModalBody>
				{message}
			</ModalBody>
			<ModalFooter>
				<Button color='secondary' size='sm' onClick={onCloseErrorModal}>Close</Button>
			</ModalFooter>
		</Modal>
	)
}

export default ErrorModal