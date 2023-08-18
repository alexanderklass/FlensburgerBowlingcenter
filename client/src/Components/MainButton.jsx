import { PropTypes } from "prop-types";

const MainButton = ({ type, disabled, children, color, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${color} m-1 flex h-8 items-center justify-center rounded p-2 text-white shadow-xl transition hover:translate-y-0.5 disabled:bg-gray-500`}
    >
      {children}
    </button>
  );
};

MainButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

export default MainButton;
