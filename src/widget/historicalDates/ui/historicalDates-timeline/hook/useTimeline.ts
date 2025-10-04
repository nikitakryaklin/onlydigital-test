import { useState } from "react";

export function useTimeline(arrLength: number) {
  const count = arrLength;
  const step = 360 / count;
  const radiusPercent = 50;
  const [rotation, setRotation] = useState(0);

  const handleSelect = (index: number) => {
    const activeAngle = [120, 60, 30, -55, -55];

    const targetAngle = -58 - index * step;
    setRotation(targetAngle);
  };

  const calculateCoordinates = (
    index: number,
    radiusPercent: number,
    step: number
  ) => {
    const angle = (index * step * Math.PI) / 180;
    const x = 50 + radiusPercent * Math.cos(angle);
    const y = 50 + radiusPercent * Math.sin(angle);

    return { x, y, angle };
  };

  return {
    coordinates: {
      step,
      rotation,
      radiusPercent,
    },
    handleSelect,
    calculateCoordinates,
  };
}
