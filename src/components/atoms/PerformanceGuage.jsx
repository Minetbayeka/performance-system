import React from 'react';

const PerformanceGauge = ({ percentage = 75, label = 'GOOD' }) => {
  const radius = 40;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * (percentage / 100);

  return (
    <div className="flex flex-col items-center justify-center w-[150px] h-[150px]">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="rotate-[-90deg]"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e4e4e4"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="green"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-2 text-green-600 font-semibold">{label}</p>
    </div>
  );
};

export default PerformanceGauge;
