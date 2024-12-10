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
  const [unit1, setUnit1] = useState("minuto");
  const [unit2, setUnit2] = useState("segundo");
  const [convertedValue, setConvertedValue] = useState("");

  const conversionFactors: Record<string, Record<string, number>> = {
    milisegundo: { milisegundo: 1, segundo: 0.001, minuto: 0.000017, hora: 0.00000027 },
    segundo: { milisegundo: 1000, segundo: 1, minuto: 0.01, hora: 0.00027 },
    minuto: { milisegundo: 60000, segundo: 60, minuto: 1, hora: 0.016 },
    hora: { milisegundo: 3600000, segundo: 3600, minuto: 60, hora: 1 },
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
      <h1 className="flex mb-4 text-3xl font-bold justify-center">Tiempo</h1>
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
          <option value="milisegundo">Milisegundo</option>
          <option value="segundo">Segundo</option>
          <option value="minuto">Minuto</option>
          <option value="hora">Hora</option>
        </select>
        <select
          value={unit2}
          onChange={(e) => setUnit2(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full text-gray-900 text-lg dark:bg-gray-700 dark:text-white"
        >
          <option value="milisegundo">Milisegundo</option>
          <option value="segundo">Segundo</option>
          <option value="minuto">Minuto</option>
          <option value="hora">Hora</option>
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
