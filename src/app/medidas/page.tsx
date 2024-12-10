"use client";

import React, { useState } from "react";

export default function Standard() {
  const buttonRows = [
    ["C", "⌫"],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    [".", "0"],
  ];

  const buttonClass =
    "w-full h-12 sm:h-20 py-2 px-4 text-sm sm:text-base text-gray-900 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white";

  const [inputValue, setInputValue] = useState("");
  const [unit1, setUnit1] = useState("metros");
  const [unit2, setUnit2] = useState("centímetros");
  const [convertedValue, setConvertedValue] = useState("");

  const conversionFactors: Record<string, Record<string, number>> = {
    milimetros: { milimetros: 1, centimetros: 0.1, metros: 0.001, kilometros: 0.000001 },
    centimetros: { milimetros: 10, centimetros: 1, metros: 0.01, kilometros: 0.00001 },
    metros: { milimetros: 1000, centimetros: 100, metros: 1, kilometros: 0.001 },
    kilometros: { milimetros: 1000000, centimetros: 100000, metros: 1000, kilometros: 1 },
  };

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setInputValue("");
      setConvertedValue("");
    } else if (value === "⌫") {
      setInputValue((prev) => prev.slice(0, -1));
    } else if (value === ".") {
      if (!inputValue.includes(".")) {
        setInputValue((prev) => prev + value);
      }
    } else if (!isNaN(Number(value)) || value === "0") {
      setInputValue((prev) => prev + value);
    }
  };

  const handleConversion = () => {
    const factor = conversionFactors[unit1][unit2];
    const result = parseFloat(inputValue || "0") * factor;
    setConvertedValue(result.toString());
  };

  return (
    <div className="grid container mx-auto p-4">
      <h1 className="flex mb-4 text-3xl font-bold justify-center">Medidas</h1>
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          value={inputValue}
          readOnly
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-52 h-20 mb-4 text-gray-950 text-right text-5xl"
        />
        <p className="border border-gray-300 rounded px-4 py-2 w-full max-w-80 h-20 mb-4 text-white text-right text-4xl bg-gray-800">
          {convertedValue || ""}
        </p>
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <select
          value={unit1}
          onChange={(e) => setUnit1(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full text-gray-900 text-lg dark:bg-gray-700 dark:text-white"
        >
          <option value="milimetros">Milímetros</option>
          <option value="centimetros">Centímetros</option>
          <option value="metros">Metros</option>
          <option value="kilometros">Kilómetros</option>
        </select>
        <select
          value={unit2}
          onChange={(e) => setUnit2(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full text-gray-900 text-lg dark:bg-gray-700 dark:text-white"
        >
          <option value="milimetros">Milímetros</option>
          <option value="centimetros">Centímetros</option>
          <option value="metros">Metros</option>
          <option value="kilometros">Kilómetros</option>
        </select>
      </div>

      <div>
        {buttonRows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-3 gap-1 w-full max-w-3xl pb-1">
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

      <div className="flex justify-center mt-4">
        <button
          onClick={handleConversion}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Convertir
        </button>
      </div>
    </div>
  );
}
