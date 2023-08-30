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
      <div className="p-4">
        <label htmlFor="cantidadMeteoros" className="block mb-2">
          Ingresar cantidad de meteoros:
        </label>
        <div className="flex items-center justify-center">
          <input
            id="cantidadMeteoros"
            type="number"
            className="p-2 border rounded-md mr-2 w-16 text-black"
            min="0"
            value={inputValue}
            onChange={e => setInputValue(Number(e.target.value))}
            onKeyDown={e => handleKeyDown(e)}
          />
          <button
            type="button"
            className="relative shadow-xl bg-gray-700 border border-gray-600  text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => {
              setMeteors(inputValue);
            }}
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
}
