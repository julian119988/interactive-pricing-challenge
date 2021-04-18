import "./Background.scss";
import PricingCard from "../PricingCard/PricingCard";

export default function Background() {
  return (
    <div className="main">
      <div className="titulo">
        <h1>Simple, traffic-based pricing</h1>
        <h4>Sign-up for out 30-day trial. No credit card required.</h4>
      </div>
      <PricingCard />
    </div>
  );
}
