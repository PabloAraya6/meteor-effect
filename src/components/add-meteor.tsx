import React, { Dispatch, SetStateAction, useState } from 'react';

interface AddMeteorProps {
  setMeteors: Dispatch<SetStateAction<number>>;
}

export function AddMeteor({ setMeteors }: AddMeteorProps) {
  const [inputValue, setInputValue] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.code === 'Enter' || e.key === '13') {
      setMeteors(Number(target.value));
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="p-8">
        <label htmlFor="cantidadMeteoros" className="block mb-2">
          {`Cantidad de meteoros: ${inputValue}`}
        </label>
        <div className="flex items-center justify-center">
          <input
            id="cantidadMeteoros"
            type="range"
            min="0"
            max="300"
            className="p-2 border rounded-md mr-2 w-64 text-black"
            value={inputValue}
            onChange={e => {
              setInputValue(Number(e.target.value));
              setMeteors(Number(e.target.value));
            }}
            onKeyDown={e => handleKeyDown(e)}
          />
        </div>
        <div className="py-4 flex justify-center">
          <button
            type="button"
            className="shadow-xl bg-gray-700 border border-gray-600  text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => {
              setInputValue(20);
              setMeteors(20);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
