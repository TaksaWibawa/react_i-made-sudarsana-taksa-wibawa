/* eslint-disable react/prop-types */
function ContactModal({ showModal, closeModal, formData }) {
	return (
		<div>
			<div
				className={`modal fade ${showModal ? "show d-block" : ""}`}
				style={{
					display: showModal ? "block" : "none",
					backdropFilter: "blur(5px)",
					backgroundColor: "rgba(0, 0, 0, 0.4)",
				}}
				tabIndex="-1"
				role="dialog"
			>
				<div
					className="modal-dialog modal-dialog-centered"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Submitted Data</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={closeModal}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Your Name: {formData.name}</p>
							<p>Your Email: {formData.email}</p>
							<p>Your Subject: {formData.subject}</p>
							<p>Your Message: {formData.message}</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={closeModal}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactModal;
