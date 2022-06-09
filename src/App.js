import "./App.css";
import React from "react";
import BoxLeft from "./components/BoxLeft";
import BoxPreview from "./components/BoxPreview";
function App() {
  const [shiftRight, setShiftRight] = React.useState(0);
  const [shifDown, setShifDown] = React.useState(0);
  const [spread, setSpread] = React.useState(3);
  const [blur, setBlur] = React.useState(5);
  const [opacity, setOpacity] = React.useState(20);
  const [rgba, setRgba] = React.useState({});
  const [checked, setChecked] = React.useState(false);
  const [layer, setLayer] = React.useState([]);
  const handleLayer = (layer) => {
    setLayer(prev => [...prev, layer])
  }
  
  return (
    <div className="App">
      <BoxLeft
        shiftRight={shiftRight}
        setShiftRight={setShiftRight}
        shifDown={shifDown}
        setShifDown={setShifDown}
        spread={spread}
        setSpread={setSpread}
        blur={blur}
        setBlur={setBlur}
        setOpacity={setOpacity}
        opacity={opacity}
        rgba={rgba}
        setRgba={setRgba}
        checked={checked}
        setChecked={setChecked}
        handleLayer={handleLayer}
        layer={layer}
      />
      <BoxPreview
        shiftRight={shiftRight}
        shifDown={shifDown}
        spread={spread}
        blur={blur}
        opacity={opacity}
        rgba={rgba}
        checked={checked}
        layer={layer}
      />

      
    </div>
  );
}

export default App;
