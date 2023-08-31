import React, { useRef, useState } from 'react';
import { Meteors } from './meteors';
import { AddMeteor } from './add-meteor';

const DEFAULT_METEORS = 20;

const WIKIPEDIA_URL = 'https://es.wikipedia.org/wiki/Meteoro_(astronom%C3%ADa)';

export function MeteorPreview() {
  const [meteors, setMeteors] = useState<number>(DEFAULT_METEORS);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const [angle, setAngle] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const radians = Math.atan2(deltaY, deltaX);
      const degree = (radians * (180 / Math.PI) + 270) % 360;
      setAngle(degree);
    }
  };

  const moreInfoCallback = () => window.open(WIKIPEDIA_URL, '_blank');

  return (
    <div
      className="h-[40rem] flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <title>Meteoros</title>
      <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
              ref={svgRef}
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
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
