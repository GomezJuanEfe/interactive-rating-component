import './RatingCircle.scss';

function RatingCircle({ 
  rateNum,
  currentRate,
  currentHover,
  handleClick,
  handleMouseOver,
}) {

  return (
    <>
      <div 
        data-rate-id={rateNum}
        className={
          `rating__circle ${currentRate >= rateNum ? 'rating__circle--active' : ''} 
          ${currentHover >= rateNum ? 'rating__circle--hover' : ''}`
        } 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
      >
        {rateNum}
      </div>
    </>
  )
}

export { RatingCircle }