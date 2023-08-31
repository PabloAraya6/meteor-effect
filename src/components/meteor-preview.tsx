import React, { useState } from 'react';
import { Meteors } from './meteors';
import { AddMeteor } from './add-meteor';

const DEFAULT_METEORS = 20;
const WIKIPEDIA_URL = 'https://es.wikipedia.org/wiki/Meteoro_(astronom%C3%ADa)';

export function MeteorPreview() {
  const [meteors, setMeteors] = useState<number>(DEFAULT_METEORS);

  const moreInfoCallback = () => window.open(WIKIPEDIA_URL, '_blank');

  return (
    <div className="h-[40rem] flex items-center justify-center">
      <title>Meteoros</title>

      <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-0 mt-4 relative z-50">
            Meteoros observados
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            A lo largo de la historia, los meteoros han iluminado el cielo
            nocturno. Estos provienen de fragmentos de asteroides y cometas que
            entran en nuestra atmósfera.
          </p>

          <button
            type="button"
            className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-gray-300"
            onClick={moreInfoCallback}
          >
            Más información &rarr;
          </button>
          <Meteors number={meteors} />
        </div>
        <AddMeteor setMeteors={setMeteors} />
      </div>
    </div>
  );
}
