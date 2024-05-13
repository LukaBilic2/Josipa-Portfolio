import { forwardRef } from 'react';

const SliderTwo = forwardRef(
  ({ imageOne, hidden, firstImage, h3Text, takenBy }, ref) => {
    return (
      <div
        className={`${hidden ? 'hidden' : ''} ${
          firstImage ? 'firstBigImage' : ''
        }`}
        ref={ref}
      >
        <div className="imagesOne">
          <img src={imageOne} alt="slide_image" />
          <div className="overlayTextOne">
            <div>
              <h3>{h3Text}</h3>
              {/* <p>{LocationText}</p> */}
            </div>
            <p>{takenBy}</p>
          </div>
        </div>
      </div>
    );
  }
);

SliderTwo.displayName = 'SliderTwo';
export default SliderTwo;
