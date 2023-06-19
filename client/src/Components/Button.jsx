import PropTypes from "prop-types";

const Button = ({ className, onClick, text, children, id }) => {
  return (
    <button id={id} onClick={onClick} className={className}>
      {text} {children}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
};

export default Button;
