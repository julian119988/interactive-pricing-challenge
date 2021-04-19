import { useRef, useState } from "react";
import Imagen from "../../images/icon-slider.svg";
import styled from "styled-components";

const StyledSlider = styled.input`
  @media (max-width: 950px) {
    /* fix for FF unable to apply focus style bug  */
    border: 1px solid white;
    -webkit-appearance: none;
    /*required for proper track sizing in FF*/
    width: 80%;
    height: 1.3vh;
    border-radius: 1vh;
    outline: none;

    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(${(props) => props.porcentaje}, hsl(174, 77%, 80%)),
      color-stop(${(props) => props.porcentaje}, hsl(224, 65%, 95%))
    );

    &::-moz-range-track {
      width: 100%;
      height: 1.3vh;
      border: none;
      border-radius: 1vh;
      background: none;
    }

    &::-moz-range-thumb {
      border: none;
      height: 5vh;
      width: 5vh;
      border-radius: 50%;
      background-color: hsl(174, 86%, 45%);
      background-image: url(${Imagen});
      background-repeat: no-repeat;
      background-size: 3vh 1.8vh;
      background-position: center center;
      box-shadow: 0px 10px 20px 8px hsl(174, 77%, 80%);
      cursor: pointer;
    }
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      width: 100%;
      height: 1.3vh;

      border: none;
      border-radius: 1vh;
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(${(props) => props.porcentaje}, hsl(174, 77%, 80%)),
        color-stop(${(props) => props.porcentaje}, hsl(224, 65%, 95%))
      );
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 5vh;
      width: 5vh;
      top: -2vh;
      position: relative;
      border-radius: 50%;
      background-color: hsl(174, 86%, 45%);
      background-image: url(${Imagen});
      background-repeat: no-repeat;
      background-size: 3vh 1.8vh;
      background-position: center center;
      box-shadow: 0px 10px 20px 8px hsl(174, 77%, 80%);
      cursor: pointer;
    }
    &::-ms-track {
      width: 100%;
      height: 1.3vh;
      background: hsl(224, 65%, 95%);
      border: none;
      border-radius: 1vh;
    }
    &::-ms-thumb {
      border: none;
      height: 5vh;
      width: 5vh;
      border-radius: 50%;
      background-color: hsl(174, 86%, 45%);
      background-image: url("../../images/icon-slider.svg");
      background-repeat: no-repeat;
      background-size: 3vh 1.8vh;
      background-position: center center;
      box-shadow: 0px 10px 20px 8px hsl(174, 77%, 80%);
      cursor: pointer;
    }
    &::-ms-fill-lower {
      background: hsl(174, 77%, 80%);
      height: 1.3vh;
      border-radius: 1vh;
    }
  }

  @media (min-width: 950px) {
    /* fix for FF unable to apply focus style bug  */
    border: 1px solid white;
    -webkit-appearance: none;
    /*required for proper track sizing in FF*/
    width: 80%;
    height: 1vh;
    border-radius: 0.5vh;
    outline: none;

    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(${(props) => props.porcentaje}, hsl(174, 77%, 80%)),
      color-stop(${(props) => props.porcentaje}, hsl(224, 65%, 95%))
    );

    &::-moz-range-track {
      width: 100%;
      height: 1vh;
      border: none;
      border-radius: 0.5vh;
      background: none;
    }

    &::-moz-range-thumb {
      border: none;
      height: 5vh;
      width: 5vh;
      border-radius: 50%;
      background-color: hsl(174, 86%, 45%);
      background-image: url(${Imagen});
      background-repeat: no-repeat;
      background-size: 3vh 1.8vh;
      background-position: center center;
      box-shadow: 0px 10px 20px 8px hsl(174, 77%, 80%);
      cursor: pointer;
    }
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      width: 100%;
      height: 1vh;

      border: none;
      border-radius: 0.5vh;
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(${(props) => props.porcentaje}, hsl(174, 77%, 80%)),
        color-stop(${(props) => props.porcentaje}, hsl(224, 65%, 95%))
      );
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 5vh;
      width: 5vh;
      top: -2vh;
      position: relative;
      border-radius: 50%;
      background-color: hsl(174, 86%, 45%);
      background-image: url(${Imagen});
      background-repeat: no-repeat;
      background-size: 3vh 1.8vh;
      background-position: center center;
      box-shadow: 0px 10px 20px 8px hsl(174, 77%, 80%);
      cursor: pointer;
    }
    &::-ms-track {
      width: 100%;
      height: 1vh;
      background: hsl(224, 65%, 95%);
      border: none;
      border-radius: 0.5vh;
    }
    &::-ms-thumb {
      border: none;
      height: 5vh;
      width: 5vh;
      border-radius: 50%;
      background-color: hsl(174, 86%, 45%);
      background-image: url("../../images/icon-slider.svg");
      background-repeat: no-repeat;
      background-size: 3vh 1.8vh;
      background-position: center center;
      box-shadow: 0px 10px 20px 8px hsl(174, 77%, 80%);
      cursor: pointer;
    }
    &::-ms-fill-lower {
      background: hsl(174, 77%, 80%);
      height: 1vh;
      border-radius: 0.5vh;
    }
  }
`;
function Slider(props) {
  const [ancho, setAncho] = useState("50%");
  const sliderRef = useRef();

  function handleChange() {
    let valor = sliderRef.current.valueAsNumber;
    props.sliderChange(valor);
    if (valor === 1) {
      setAncho("0%");
    } else if (valor === 2) {
      setAncho("25%");
    } else if (valor === 3) {
      setAncho("50%");
    } else if (valor === 4) {
      setAncho("75%");
    } else {
      setAncho("100%");
    }
  }

  return (
    <StyledSlider
      type="range"
      ref={sliderRef}
      onChange={handleChange}
      className="slider"
      defaultValue="3"
      min="1"
      max="5"
      porcentaje={ancho}
    />
  );
}

export default Slider;
