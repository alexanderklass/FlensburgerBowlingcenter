import { PropTypes } from "prop-types";
const SuccessBox = ({ text, condition }) => {
  return (
    <div
      className={`${
        condition ? "-translate-x-2 shadow-lg" : "translate-x-96"
      } fixed right-0 top-12 z-40 flex h-16 w-96 rounded transition-transform`}
    >
      <div className="flex items-center rounded-l-lg bg-green-600 px-6 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-white"
          viewBox="0 0 16 16"
          width="20"
          height="20"
        >
          <path
            fillRule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </div>
      <div className="flex w-full items-center justify-between rounded-r-lg border border-gray-200 border-l-transparent bg-white px-4 py-6">
        <div>{text}</div>
      </div>
    </div>
  );
};

SuccessBox.propTypes = {
  text: PropTypes.string,
  condition: PropTypes.bool,
};

export default SuccessBox;
