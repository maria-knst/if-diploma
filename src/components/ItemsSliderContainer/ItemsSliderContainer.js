import "./ItemsSliderContainer.scss";
import Arrow from "../Arrow/Arrow";
import {
  VISIBLE_DIV_SIZE,
  madeQueueFrom,
  increment,
  decrement,
} from "../../utils/utils";
import { useState } from "react";
import ItemElement from "../ItemElement/ItemElement";

let sliderQueue = [];

const ItemsSliderContainer = ({ elements }) => {
  const div_size = window.screen.width < 600 ? 2 : 4;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(div_size);
  const [arrowPrev, setArrowPrev] = useState(false);
  const [arrowNext, setArrowNext] = useState(true);

  const clickPrev = (event) => {
    setArrowNext(true);
    event.preventDefault();
    const decr = decrement(start);
    if (decr !== false) {
      setStart(decr);
      setEnd(start + div_size - 1);
    } else {
      setArrowPrev(false);
    }
  };

  const clickNext = (event) => {
    setArrowPrev(true);
    event.preventDefault();
    const incr = increment(end, elements);
    if (incr !== false) {
      setEnd(incr);
      setStart(end - div_size + 1);
    } else {
      setArrowNext(false);
    }
  };

  sliderQueue = madeQueueFrom(elements, start, end);

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
