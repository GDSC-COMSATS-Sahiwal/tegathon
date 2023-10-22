'use client';

import { useTimer } from 'react-timer-hook';

export default function HeroTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    <div>
      <div className="flex font-bold text-3xl md:text-4xl gap-4 ">
        <div className="flex flex-col items-center justify-center w-16">
          <h3>{String(hours).padStart(2, '0')}</h3>
          <p className="text-xs -mt-1">Hours</p>
        </div>
        <p>:</p>
        <div className="flex flex-col items-center justify-center w-16">
          <h3>{String(minutes).padStart(2, '0')}</h3>
          <p className="text-xs -mt-1">Minutes</p>
        </div>
        <p>:</p>
        <div className="flex flex-col items-center justify-center w-16">
          <h3>{String(seconds).padStart(2, '0')}</h3>
          <p className="text-xs -mt-1">Seconds</p>
        </div>
      </div>
    </div>
  );
}
