import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'

const SuccessModal = ({ isShowSuccessModal, requestDetails, onCloseSuccessModal }) => {
	const message = requestDetails ? requestDetails.txid : ''

	return (
		<Modal isOpen={isShowSuccessModal}>
			<ModalHeader>
				Success info
			</ModalHeader>
			<ModalBody>
				{message}
			</ModalBody>
			<ModalFooter>
				<Button color='secondary' size='sm' onClick={onCloseSuccessModal}>Close</Button>
			</ModalFooter>
		</Modal>
	)
}

export default SuccessModal