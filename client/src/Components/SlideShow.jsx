import { PropTypes } from "prop-types";
import { VscArrowRight } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";
import { useState } from "react";

const SlideShow = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideNext = () => {
    slideIndex < slides.length - 1
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(0);
  };
  const slideBack = () => {
    slideIndex > 0
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(slides.length - 1);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        className="relative h-96 w-full rounded-lg bg-cover bg-center"
      >
        <div className="flex h-full flex-row justify-between">
          <button
            className={"absolute left-0 top-1/2 m-1 rounded-lg p-3"}
            onClick={slideNext}
          >
            <VscArrowLeft style={{ color: "white", fontSize: 25 }} />
          </button>
          <button
            className={"absolute right-0 top-1/2 m-1 rounded-lg p-3"}
            onClick={slideBack}
          >
            <VscArrowRight style={{ color: "white", fontSize: 25 }} />
          </button>
        </div>
      </div>
    </>
  );
};

SlideShow.propTypes = {
  slides: PropTypes.array,
};

export default SlideShow;
