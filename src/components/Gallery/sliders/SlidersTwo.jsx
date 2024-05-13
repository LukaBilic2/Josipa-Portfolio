// for big screen
import { forwardRef } from 'react';

const SliderTwo = forwardRef(
  ({ imageOne, imageTwo, hidden, h3Text, LocationText, takenBy }, ref) => {
    return (
      <div className={`${hidden ? 'hidden' : ''}`} ref={ref}>
        <div className="imagesSlideTwo">
          <div className="hoverContainer">
            <img src={imageOne} alt="slide_image" />
            <div className="overlayTextTwo">
              <div>
                <h3>{h3Text}</h3>
                <p>{LocationText}</p>
              </div>
              <p>{takenBy}</p>
            </div>
          </div>

          <div className="hoverContainer">
            <img src={imageTwo} alt="slide_image" />
            <div className="overlayTextSecond">
              <div>
                <h3>{h3Text}</h3>
                <p>{LocationText}</p>
              </div>
              <p>{takenBy}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

SliderTwo.displayName = 'SliderTwo';
export default SliderTwo;
