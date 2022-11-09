import "./ItemsSliderContainer.scss";
import Arrow from "../Arrow/Arrow";
import { madeQueueFrom, increment, decrement } from "../../utils/functions";
import { useState } from "react";
import ItemElement from "../ItemElement/ItemElement";

let sliderQueue = [];

const ItemsSliderContainer = ({ elements }) => {
  const div_size = window.screen.width < 600 ? 2 : 4;

  const [sliderSize, setSliderSize] = useState({
    start: 0,
    end: div_size,
  });
  const [arrowPrev, setArrowPrev] = useState(false);
  const [arrowNext, setArrowNext] = useState(true);

  const clickPrev = (event) => {
    setArrowNext(true);
    event.preventDefault();
    const decr = decrement(sliderSize.start);
    if (decr !== false) {
      setSliderSize({
        end: sliderSize.start + div_size - 1,
        start: decr,
      });
    } else {
      setArrowPrev(false);
    }
  };

  const clickNext = (event) => {
    setArrowPrev(true);
    event.preventDefault();
    const incr = increment(sliderSize.end, elements);
    if (incr !== false) {
      setSliderSize({
        end: incr,
        start: sliderSize.end - div_size + 1,
      });
    } else {
      setArrowNext(false);
    }
  };

  sliderQueue = madeQueueFrom(elements, sliderSize.start, sliderSize.end);

  return (
    <div className="places__flex-container col-12">
      <Arrow id="places__arrow-prev" onclick={clickPrev} visible={arrowPrev} />
      {sliderQueue.map((item) => (
        <ItemElement key={item.id} item={item} />
      ))}
      <Arrow id="places__arrow-next" onclick={clickNext} visible={arrowNext} />
    </div>
  );
};

export default ItemsSliderContainer;
