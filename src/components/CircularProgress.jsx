import React, { useState, useEffect } from "react";

const r = 100;
const cf = 2 * Math.PI * r; // Full circle circumference

export default function CircularProgress({ value, max }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    setAnimatedValue(0); // Reset animated value on component mount

    const step = value / 100; // Step by which we increase animatedValue

    const interval = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev < value) {
          return Math.min(prev + step, value); // Increase animatedValue until it reaches `value`
        } else {
          clearInterval(interval); // Stop the interval when animatedValue reaches `value`
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [value]);

  const handleRangeChange = (val) => {
    return (cf * (val / max)); // Calculate based on full circle
  };

  // Determine color based on value
  const getColor = () => {
    if (animatedValue < 40) return "blue";
    if (animatedValue < 70) return "yellow";
    return "red";
  };
  const getBg = () => {
    if (animatedValue < 40) return "#C0D6DF";
    if (animatedValue < 70) return "#E8E3C9";
    return "#EBCBCB";
  };

  return (
    <div className="w-fit h-fit  relative">
      <svg className="w-full h-full transition-all duration-2000 transform rotate-[-90deg]" viewBox="0 0 240 240">
        {/* Meter Background */}
        <circle
          r={r}
          cx="120"
          cy="120"
          stroke={getBg()}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={cf}
          fill="none"
        />

        {/* Dynamic Value Meter */}
        <circle
          r={r}
          cx="120"
          cy="120"
          stroke={getColor()} // Apply dynamic color
          strokeWidth="20"
          strokeDasharray={`${handleRangeChange(animatedValue)}, ${cf}`}
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center">
        <p className="font-semibold text-4xl md:text-2xl text-primary">{animatedValue.toFixed(0)}%</p>
      </div>
    </div>
  );
}
