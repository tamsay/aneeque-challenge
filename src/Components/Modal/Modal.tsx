/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

const DisplayModal = () => {
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);

	return (
		<>
			<div className=''>
				<Modal
					show={show}
					onHide={handleClose}
					onClick={handleClose}
					centered
					size='lg'
					dialogClassName='no-result-modal-wrapper'
				>
					<Modal.Header className='no-result-modal-header'>
						<i className='fas fa-times-circle' />
					</Modal.Header>
					<Modal.Body className='no-result-modal-body'>
						<h3 className='modal-error-header'>No Results</h3>
						<p className='modal-error-message'>Music Finder didn&apos;t quite catch that</p>
						<button type='button' className='modal-error-button'>
              TRY AGAIN
						</button>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
};

export default DisplayModal;
