import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleInput = (e) => {
    const value = input === "0" ? e.target.value : input + e.target.value;
    const matches = value.match(/[+\x2F%\-x]/g);
    const hasMultipleOccurrences = matches && matches.length > 1;
    if (hasMultipleOccurrences === true) {
      setInput(value.slice(0, -1));
      onClickResult();
    } else {
      setInput(value);
    }
  };

  const onClickResult = () => {
    let includes = /[+\x2F%\-x]/g.test(input);
    if (includes === true) {
      let op = input.match(/[+\x2F%\-x]/g).join("");
      const val = input.includes(op) ? input.split(op) : input;
      switch (op) {
        case "+":
          setInput(parseInt(val[0]) + parseInt(val[1]));
          break;
        case "-":
          setInput(val[0] - val[1]);
          break;
        case "x":
          setInput(val[0] * val[1]);
          break;
        case "%":
          setInput(val[0] / val[1]);
          break;
        default:
          console.log("invalid input");
      }
    } else {
      setInput(input);
    }
  };

  const clear = () => {
    setInput("0");
  };

  return (
    <div>
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="bg-gray-900 border-2 border-black shadow-2xl rounded-lg">
          <div className="flex justify-end h-10 m-4 ">
            <h1 className="text-white text-right text-6xl mr-6">{input}</h1>
          </div>
          <div id="buttons" className="grid p-5 grid-cols-4 gap-4 text-3xl text-gray-900">
            <button className="col-span-3 bg-gray-500 hover:bg-gray-400 rounded-full p-7 font-mono text-3xl transition duration-200" onClick={clear}>
              C
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 rounded-full p-7 font-mono text-3xl" value="%" onClick={handleInput}>
              &divide;
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="1" onClick={handleInput}>
              1
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="2" onClick={handleInput}>
              2
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="3" onClick={handleInput}>
              3
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 rounded-full p-7 font-mono ext-3xl" value="x" onClick={handleInput}>
              x
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="4" onClick={handleInput}>
              4
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="5" onClick={handleInput}>
              5
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="6" onClick={handleInput}>
              6
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 rounded-full p-7 font-mono text-3xl" value="-" onClick={handleInput}>
              -
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="7" onClick={handleInput}>
              7
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="8" onClick={handleInput}>
              8
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="9" onClick={handleInput}>
              9
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 rounded-full p-7 font-mono text-3xl" value="+" onClick={handleInput}>
              +
            </button>
            <button className="bg-gray-800 rounded-full p-7 font-mono text-3xl text-white hover:bg-gray-600" value="0" onClick={handleInput}>
              0
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 col-span-3  rounded-full p-7 font-mono text-3xl" value="=" onClick={onClickResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
