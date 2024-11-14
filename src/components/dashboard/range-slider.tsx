import { useState } from "react";

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(40);
  const [maxValue] = useState(950);

  return (
    <div className="range-slider flex flex-col">
      <input
        type="range"
        min={minValue}
        max={maxValue}
        step="1"
        className="slider"
        id="price-slider"
        onChange={(e) => setMinValue(+e.currentTarget.value)}
      />
      <label htmlFor="price-slider" className="slider-label text-[#999999]">
        Price: ₦<span id="price-value">{minValue}</span> - ₦
        <span id="price-value2">{maxValue}</span>
      </label>
    </div>
  );
}
