import { useRef } from "react";
import "./Slider.scss";

function Slider(props) {
  const sliderRef = useRef();

  function handleChange() {
    props.sliderChange(sliderRef.current.valueAsNumber);
  }

  return (
    <input
      type="range"
      ref={sliderRef}
      onChange={handleChange}
      className="slider"
      defaultValue="3"
      min="1"
      max="5"
    />
  );
}

export default Slider;
