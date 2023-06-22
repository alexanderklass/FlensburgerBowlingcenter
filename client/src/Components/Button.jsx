import PropTypes from "prop-types";

const Button = ({ disabled, className, onClick, text, children, id }) => {
  return (
    <button disabled={disabled} id={id} onClick={onClick} className={className}>
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
