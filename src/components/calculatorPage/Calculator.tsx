"use client";

import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e: any) {
    var input = e.target.value;

    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function percentual() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs);
    }
  }

  function operatorHandler(e: any) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "+") {
      setNum(oldnum + num);
    }
    if (operator === "-") {
      setNum(oldnum - num);
    }
    if (operator === "X") {
      setNum(oldnum * num);
    }
    if (operator === "/") {
      setNum(oldnum / num);
    }

    //console.log("calculou!");
    //console.log(oldnum);
    //console.log(num);
    //console.log(operator);
  }
  return (
    <>
      <div className=" m-32 flex justify-center">
        <div className="max-w-md">
          <div className=" bg-slate-900 rounded-2xl pl-8">
            <h1 className=" text-4xl pt-4 pb-3 flex justify-end pr-8 mr-8">
              {num}
            </h1>
            <button
              className=" bg-red-600 w-12 h-12 text-2xl rounded-full hover:bg-red-500 hover:cursor-pointer transition-colors  m-2 "
              onClick={clear}
              value={"AC"}
            >
              AC
            </button>
            <button
              className=" bg-cyan-700 w-12 h-12 text-2xl rounded-full hover:bg-cyan-500 hover:cursor-pointer transition-colors  m-2"
              onClick={changeSign}
              value={"+/-"}
            >
              +/-
            </button>
            <button
              className=" bg-cyan-700 w-12 h-12 text-2xl rounded-full hover:bg-cyan-500 hover:cursor-pointer transition-colors  m-2"
              onClick={percentual}
            >
              %
            </button>
            <button
              className=" bg-violet-900 w-12 h-12 text-2xl rounded-full hover:bg-violet-500 hover:cursor-pointer transition-colors  m-2"
              value={"/"}
              onClick={operatorHandler}
            >
              /
            </button>
            <button
              className=" bg-violet-900 w-12 h-12 text-2xl rounded-full hover:bg-violet-500 hover:cursor-pointer transition-colors  m-2"
              onClick={operatorHandler}
              value={"X"}
            >
              X
            </button>
            <br />
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={1}
            >
              1
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={2}
            >
              2
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={3}
            >
              3
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={4}
            >
              4
            </button>
            <button
              className=" bg-violet-900 w-12 h-12 text-2xl rounded-full hover:bg-violet-500    hover:cursor-pointer transition-colors  m-2"
              onClick={operatorHandler}
              value={"+"}
            >
              +
            </button>
            <br />
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={5}
            >
              5
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={6}
            >
              6
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={7}
            >
              7
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={8}
            >
              8
            </button>
            <button
              className=" bg-violet-900 w-12 h-12 text-2xl rounded-full hover:bg-violet-500 hover:cursor-pointer transition-colors  m-2"
              onClick={operatorHandler}
              value={"-"}
            >
              -
            </button>
            <br />
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={9}
            >
              9
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={0}
            >
              0
            </button>
            <button
              className=" bg-gray-600 w-12 h-12 text-2xl rounded-full hover:bg-slate-400 hover:cursor-pointer transition-colors  m-2"
              onClick={inputNum}
              value={"."}
            >
              .
            </button>

            <button
              className="  bg-yellow-500 w-12 h-12 text-2xl rounded-full hover:bg-yellow-300  hover:cursor-pointer transition-colors  m-2"
              onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
