"use client"
import React from 'react';
import { useState } from 'react';

export default function Standard() {
  const buttonRows = [
    ['²', 'π', 'e', 'C', '⌫'],
    ['x²', '¹/ₓ', '|x|', 'exp', 'mod'],
    ['√', '(', ')', 'n!', '÷'],
    ['xʸ', '7', '8', '9', '*'],
    ['10ˣ', '4', '5', '6', '-'],
    ['log', '1', '2', '3', '+'],
    ['in', '+/-', '0', '.', '='],
  ];

  const buttonClass =
    'w-full h-12 sm:h-14 py-2 px-4 text-sm sm:text-base text-gray-900 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white';

    const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setInputValue("");
    }
    else if (value === "⌫") {
      setInputValue((prev) => prev.slice(0, -1));
    } else if (value === "+/-") {
      if (inputValue) {
        if (inputValue.startsWith("-")) {
          setInputValue(inputValue.slice(1));
        } else {
          setInputValue(`-${inputValue}`);
        }
      }
    } else if (value === "=") {
        const expression = inputValue
          .replace("÷", "/")
          .replace("×", "*")
          .replace("^", "**");
        const result = eval(expression); 
        setInputValue(result.toString());
        
    } else if (value === "%") {
      if (inputValue) {
        const percentage = parseFloat(inputValue) / 100;
        setInputValue(percentage.toString());
      }
    } else {
      setInputValue((prev) => prev + value);
    }
    if (value === "²") {
      setInputValue((prev) => (parseFloat(prev) ** 2).toString());
    }
    if (value === "π") {
      setInputValue((Math.PI).toString());
    }
    if (value === "e") {
      setInputValue((Math.E).toString());
    }
    if (value === "x²") {
      setInputValue((parseFloat(inputValue) ** 2).toString());
    }     
    if (value === "¹/ₓ") {
      setInputValue((1 / parseFloat(inputValue)).toString());
    }
    if (value === "|x|") {
      setInputValue(Math.abs(parseFloat(inputValue)).toString());
    }
    if (value === "exp") {
      setInputValue(Math.exp(parseFloat(inputValue)).toString());
    }
    if (value === "mod") {
      setInputValue((parseFloat(inputValue) % 2).toString());
    }
    if (value === "√") {
      setInputValue(Math.sqrt(parseFloat(inputValue)).toString());
    }
    if (value === "xʸ") {
      setInputValue((parseFloat(inputValue) ** parseFloat(inputValue)).toString());
    }
    if (value === "10ˣ") {
      setInputValue((10 ** parseFloat(inputValue)).toString());
    }
    if (value === "log") {
      setInputValue(Math.log10(parseFloat(inputValue)).toString());
    }
    if (value === "ln") {
      setInputValue(Math.log(parseFloat(inputValue)).toString());
    }
    if (value === "in") {
      setInputValue((1 / parseFloat(inputValue)).toString());
    }

  };



  return (
    <div className="grid place-items-center container mx-auto p-4">
      <h1 className="flex mb-4 text-3xl font-bold">Cientifica</h1>

      <input
        type="text"
        value={inputValue}
        readOnly
        className="border border-gray-300 rounded px-4 py-2 w-full max-w-7xl h-20 mb-4 text-gray-950 text-right text-5xl"
      />

      {buttonRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-1 w-full max-w-8xl pb-1">
          {row.map((label, buttonIndex) => (
            <button
            key={buttonIndex}
            className={buttonClass}
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
          ))}
        </div>
      ))}
    </div>
  );
}
