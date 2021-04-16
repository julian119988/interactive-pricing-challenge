import "./Switch.scss";
export default function Switch(props) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={props.checkDiscount} />
      <span className="switchSlider round"></span>
    </label>
  );
}
