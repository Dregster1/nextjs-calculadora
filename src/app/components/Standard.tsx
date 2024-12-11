"use client";
import React, { useState } from "react";

export default function Standard() {
  const buttonRows = [
    ["C", "^", "%", "÷"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="],
  ];

  const buttonClass =
    "w-full h-12 sm:h-20 py-2 px-4 text-sm sm:text-base text-gray-900 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white";

  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false); 

  const handleButtonClick = (value: string) => {
    if (isError && value !== "C") {
      setInputValue("");
      setIsError(false);
    }

    if (value === "C") {
      setInputValue("");
      setIsError(false); 
    } else if (value === "+/-") {
      if (inputValue) {
        if (inputValue.startsWith("-")) {
          setInputValue(inputValue.slice(1));
        } else {
          setInputValue(`-${inputValue}`);
        }
      }
    } else if (value === "=") {
      try {
        const expression = inputValue
          .replace("÷", "/")
          .replace("×", "*")
          .replace("^", "**");
        const result = eval(expression); 
        setInputValue(result.toString());
        setIsError(false); 
      } catch (error) {
        setInputValue("Error");
        setIsError(true); 
      }
    } else if (value === "%") {
      if (inputValue) {
        const percentage = parseFloat(inputValue) / 100;
        setInputValue(percentage.toString());
      }
    } else {
      setInputValue((prev) => prev + value);
    }
  };

  return (
    <div className="grid place-items-center container mx-auto p-4">
      <h1 className="flex mb-4 text-3xl font-bold">Estandar</h1>

      <input
        type="text"
        value={inputValue}
        readOnly
        className="border border-gray-300 rounded px-4 py-2 w-full max-w-7xl h-20 mb-4 text-gray-950 text-right text-5xl"
      />

      {buttonRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-1 w-full max-w-8xl pb-1">
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
