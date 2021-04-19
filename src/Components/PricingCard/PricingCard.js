import "./PricingCard.scss";
import Slider from "../Slider/Slider";
import Switch from "../Switch/Switch";
import { useState } from "react";
import ListCheck from "../../images/icon-check.svg";

export default function PricingCard() {
  const [precio, setPrecio] = useState("16.00");
  const [pageviews, setPageviews] = useState("100k");
  const [discount, setDiscount] = useState(false);

  function handleChange(valor) {
    if (valor === 1) {
      setPrecio(evaluarPrecio(8));
      setPageviews("10k");
    } else if (valor === 2) {
      setPrecio(evaluarPrecio(12));
      setPageviews("50k");
    } else if (valor === 3) {
      setPrecio(evaluarPrecio(16));
      setPageviews("100k");
    } else if (valor === 4) {
      setPrecio(evaluarPrecio(24));
      setPageviews("500k");
    } else {
      setPrecio(evaluarPrecio(36));
      setPageviews("1M");
    }
  }

  function evaluarPrecio(precio) {
    if (discount) {
      return (precio * 0.75).toFixed(2);
    } else {
      return precio.toFixed(2);
    }
  }

  function checkDiscount(event) {
    if (event.target.checked) {
      setPrecio((precio * 0.75).toFixed(2));
      setDiscount(true);
    } else {
      setPrecio(((precio * 100) / 75).toFixed(2));
      setDiscount(false);
    }
  }

  return (
    <div className="container">
      <div className="upperCard">
        <div className="pricies">
          <h4 className="pageviews">{pageviews} PAGEVIEWS</h4>
          <div className="desktopPrice">
            <h1 className="desktopPrice">${precio}</h1>
            <h4 className="desktopPrice"> / month</h4>
          </div>
        </div>
        <Slider sliderChange={handleChange} />
        <div className="mobilePrice">
          <h1 className="mobilePrice">${precio}</h1>
          <h4 className="mobilePrice"> / month</h4>
        </div>

        <div className="billing">
          <p>Monthly Billing</p>
          <Switch checkDiscount={checkDiscount} />
          <p>Yearly Billing</p>
          <div className="discount">
            <h6></h6>
          </div>
        </div>
      </div>
      <div className="lowerCard">
        <div className="leftSide">
          <ul>
            <li>
              <img
                src={ListCheck}
                alt="Check verde"
                style={{ marginRight: "1vh" }}
              />{" "}
              Unlimited websites
            </li>
            <li>
              {" "}
              <img
                src={ListCheck}
                alt="Check verde"
                style={{ marginRight: "1vh" }}
              />
              100% data ownership
            </li>
            <li>
              {" "}
              <img
                src={ListCheck}
                alt="Check verde"
                style={{ marginRight: "1vh" }}
              />
              Email reports
            </li>
          </ul>
        </div>
        <button>Start my trial</button>
      </div>
    </div>
  );
}
