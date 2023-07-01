import './Modal.scss'
import tyIllustration from '/illustration-thank-you.svg';

function Modal({ rate, rateLength, show, handleClickModal }) {
  if (!rate) rate = 0;
  if (!show) return null;

  return (
    <div className="modal" onClick={handleClickModal}>
      <div className="modal-content">
        <div className="modal-image">
          <img src={tyIllustration} />
        </div>
        <div className="modal-selected-rate">
          <p>You selected {rate} out of {rateLength} </p>
        </div>
        <h3>Thank you!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export { Modal }