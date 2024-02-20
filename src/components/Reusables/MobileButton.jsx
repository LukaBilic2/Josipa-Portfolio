import PropTypes from 'prop-types';

const MobileButton = ({ navToggleClass, onClick, linesClass }) => {
  return (
    <div>
      <button className={navToggleClass} onClick={onClick}>
        <span className={linesClass}></span>
        <span className={linesClass}></span>
        <span className={linesClass}></span>
      </button>
    </div>
  );
};

MobileButton.propTypes = {
  navToggleClass: PropTypes.string,
  onClick: PropTypes.func,
  linesClass: PropTypes.string,
};

export default MobileButton;
