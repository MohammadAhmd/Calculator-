import React, { useState } from 'react'
import "./calculator.css"


function Calculator() {

    const [value, setValue] = useState('')

    function handle(e) {
        setValue(value + e.target.innerHTML);
    }

    function equal(){
        setValue(eval(value));
    }

    function allCancel(){
        setValue("");
    }
    function cancel(){
        setValue(value.toString().slice(0, -1));
    }
    return (
        <>
            <div class="Body">
                <input type="text" placeholder="0" class="result" value={value} />
                <div class="box">
                    <button class="btn gray" onClick={allCancel}>AC</button>
                    <button class="btn gray" onClick={cancel} >C</button>
                    {/* % */}
                    <button class="btn gray " onClick={handle}>%</button>
                    {/* / */}
                    <button class="btn orange " onClick={handle}>/</button>
                    <button class="btn black" onClick={handle}>7</button>
                    <button class="btn black" onClick={handle}>8</button>
                    <button class="btn black" onClick={handle}>9</button>
                    {/* * */}
                    <button class="btn orange  big" onClick={handle}>*</button>
                    <button class="btn black" onClick={handle}>4</button>
                    <button class="btn black" onClick={handle}>5</button>
                    <button class="btn black" onClick={handle}>6</button>
                    {/* - */}
                    <button class="btn orange  big" onClick={handle}>-</button>
                    <button class="btn black" onClick={handle}>1</button>
                    <button class="btn black" onClick={handle}>2</button>
                    <button class="btn black" onClick={handle}>3</button>
                    {/* +  */}
                    <button class="btn orange  big" onClick={handle}>+</button>
                    <button class="btn black" onClick={handle}>0</button>
                    <button class="btn black" onClick={handle}>00</button>
                    <button class="btn black big dot" onClick={handle}>.</button>
                    {/* =  */}
                    <button class="btn orange " onClick={equal}>=</button>
                </div>
            </div>
        </>
    )
}

export default Calculator