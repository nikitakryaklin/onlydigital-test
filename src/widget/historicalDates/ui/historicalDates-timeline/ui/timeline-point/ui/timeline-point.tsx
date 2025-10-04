import { HTMLProps, useState } from "react";
import styles from "./timeline-point.module.scss";
import clsx from "clsx";

export function TimelinePoint({
  coordinates,
  isActive,
  value,
  setIsActive,
  ...divProps
}: {
  coordinates: {
    x: number;
    y: number;
    angle: number;
    rotation: number;
  };
  value: number;
  isActive: boolean;
  setIsActive: (n: number) => void;
} & HTMLProps<HTMLDivElement>) {
  const [isVisible, setIsVisible] = useState(false);
  const pointSize = "12%";

  return (
    <div
      className={clsx(
        styles.point,
        (isActive || isVisible) && styles.pointIsActive
      )}
      style={{
        width: pointSize,
        height: pointSize,
        top: `calc(${coordinates.y}% - ${pointSize} / 2)`,
        left: `calc(${coordinates.x}% - ${pointSize} / 2)`,
      }}
      onClick={() => setIsActive(value)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...divProps}
    >
      {(isActive || isVisible) && (
        <p
          style={{
            transform: `rotate(${
              -coordinates.rotation - coordinates.angle
            }deg)`,
          }}
        >
          {value + 1}
        </p>
      )}
    </div>
  );
}
