import './RatingList.scss';
import icon from '/icon-star.svg'

import { useState } from 'react';
import { RatingCircle } from '../RatingCircle';
import { Modal } from '../Modal';

function RatingList() {
  const rageRate = [1, 2, 3, 4, 5];

  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0)
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    const rateUpdated = event.target.getAttribute('data-rate-id');
    setRate(rateUpdated);
  }

  const handleMouseOver = (event) => {
    const numberUpdated = event.target.getAttribute('data-rate-id');
    setHover(numberUpdated);
  }

  const handleMouseOut = () => {
    console.log('Mouse over');
    setHover(0);
  }

  const handleClickModal = () => {
    setShow(false);
    setRate(0);
  }

  return (
    <>
      <div className='rating-container'>
        <div className="rating__star-icon">
          <img src={icon} />
        </div>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback is appriated to help us improve our offering!
        </p>
        <div className="rate-circles_container" onMouseLeave={ handleMouseOut } >
          { rageRate.map((item, index) => {
              return <RatingCircle 
                key={index}
                currentRate={rate} 
                currentHover={hover}
                rateNum={item}
                handleClick={handleClick}
                handleMouseOver={handleMouseOver}
              /> 
            }) }
        </div>
        <button className='rating__button' onClick={() => setShow(true)}>SUBMIT</button>
      </div>
      <Modal
        show={show}
        rate={rate}
        rateLength={rageRate.length}
        handleClickModal={handleClickModal}
      />
    </>
  )
}

export { RatingList }