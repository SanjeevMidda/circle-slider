import { useState } from "react";
import "./index.css";

function App() {
  const [colorValues, setColorValues] = useState({
    sliderOne: 127,
    sliderTwo: 127,
    sliderThree: 127,
  });

  let circleStyles = {
    background: `rgb(${colorValues.sliderOne}, ${colorValues.sliderTwo}, ${colorValues.sliderThree})`,
  };

  return (
    <div className="App">
      <h5>colors</h5>
      <div className="color-circle" style={circleStyles}></div>
      <div className="sliders">
        <div className="inputSlider">
          <input
            type="range"
            min="0"
            max="255"
            value={colorValues.sliderOne}
            onChange={(e) =>
              setColorValues({ ...colorValues, sliderOne: e.target.value })
            }
            className="slider"
          />
        </div>

        <div className="inputSlider">
          <input
            type="range"
            min="0"
            max="255"
            value={colorValues.sliderTwo}
            onChange={(e) =>
              setColorValues({ ...colorValues, sliderTwo: e.target.value })
            }
            className="slider"
          />
        </div>

        <div className="inputSlider">
          <input
            type="range"
            min="0"
            max="255"
            value={colorValues.sliderThree}
            onChange={(e) =>
              setColorValues({ ...colorValues, sliderThree: e.target.value })
            }
            className="slider"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
