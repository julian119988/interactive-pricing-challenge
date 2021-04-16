import "./Background.scss";
import PricingCard from "../PricingCard/PricingCard";

export default function Background() {
  return (
    <div className="main">
      <div className="titulo">
        <h2>Simple, traffic-based pricing</h2>
        <h5>Sign-up for out 30-day trial. No credit card required.</h5>
      </div>
      <PricingCard />
    </div>
  );
}
