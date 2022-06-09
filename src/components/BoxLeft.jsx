import React from 'react'
import InputColor from 'react-input-color';
const BoxLeft = ({layer, handleLayer,checked, setChecked, setRgba, rgba, shiftRight, setShiftRight, shifDown, setShifDown, spread, setSpread, blur, setBlur, opacity, setOpacity}) => {
    
  return (
      <div className="box-left">
          <h3>Box-Shadow CSS Generator</h3>
          <div>
              <label>Shift right</label><br/><br/>
              <input min="-50" value={shiftRight} title={shiftRight} max="50" type="range" onChange={(e) => setShiftRight(e.target.value)}/>
          </div>
          <br/>
          <div>
              <label>Shift down</label><br/><br/>
              <input min="-50" value={shifDown} title={shifDown} max="50" type="range" onChange={(e) => setShifDown(e.target.value)}/>
          </div>
          <br/>
          <div>
              <label>Spread</label><br/><br/>
              <input min="0" value={spread} title={spread} max="100" type="range" onChange={(e) => setSpread(e.target.value)}/>
          </div>
          <br/>
          <div>
              <label>Blur</label><br/><br/>
              <input min="0" value={blur} title={blur} max="100" type="range" onChange={(e) => setBlur(e.target.value)}/>
          </div>
          <br/>
          <div>
              <label>Opacity</label><br/><br/>
              <input min="0" value={opacity} title={opacity} max="100" type="range" onChange={(e) => setOpacity(e.target.value)}/>
          </div>
          <br/>
          <div>
              <input type="checkbox" checked={checked} onChange={()=> setChecked(!checked)}/>
              <label>Inset</label>
          </div>
          <br/>
          <div>
              <InputColor
                    value=""
                    initialValue={"#000000"}
                    onChange={setRgba}
                    placement="right"
                />
          </div>
          <br/>
          <div className="box-add">
              <button onClick={() => handleLayer(`0px 0px 5px 3px rgba(0,0,0,0.2) `)}>Add Layer</button>
              <br/>
              <br/>
              <div>
                  {`${shiftRight}px ${shifDown}px ${blur}px ${spread}px rgba(${rgba.r},${rgba.g},${rgba.b},${opacity / 100}) `}
                  {
                      layer.map((item, index) =>(<div key={index}>{item}</div>))
                  }
              </div>
          </div>
    </div>
  )
}

export default React.memo(BoxLeft)