import { useEffect } from "react";
import styles from "./historicalDates-timeline.module.scss";
import { ArrowButton, DateXL, DelayRender, SubText } from "@/shared";
import { TimelinePoint } from "./timeline-point/ui/timeline-point";
import { useTimeline } from "../hook/useTimeline";

export function HistoricalDatesTimeline({
  areas,
  area,
  isActive,
  setIsActive,
}: {
  areas: { id: number; area: string; years: number[] }[];
  area: { area: string; isVisiable: boolean };
  isActive: number;
  setIsActive: (active: number) => void;
}) {
  const { coordinates, handleSelect, calculateCoordinates } = useTimeline(
    areas.length
  );

  const setActive = (activeElement: number) => {
    setIsActive(activeElement);
    handleSelect(activeElement);
  };

  useEffect(() => {
    handleSelect(0);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* timeline */}
      <div className={styles.timeLine}>
        <div
          className={styles.circle}
          style={{ transform: `rotate(${coordinates.rotation}deg)` }}
        >
          {areas.map((el, i) => {
            return (
              <TimelinePoint
                key={i}
                coordinates={{
                  ...calculateCoordinates(
                    i,
                    coordinates.radiusPercent,
                    coordinates.step
                  ),
                  rotation: coordinates.rotation,
                }}
                value={i}
                isActive={i === isActive}
                setIsActive={setActive}
              />
            );
          })}
        </div>

        <div className={styles.date}>
          <DateXL date={areas[isActive].years[0]} variant="blue" />
          <DateXL date={areas[isActive].years[1]} variant="pink" />
        </div>

        <DelayRender isVisiable={area.isVisiable}>
          <h3 className={styles.area}>{area?.area}</h3>
        </DelayRender>
      </div>

      {/* navigation */}
      <div className={styles.navigation}>
        <SubText text={`0${isActive + 1}/0${areas.length}`} />
        <div>
          <ArrowButton
            variant="prev"
            isDisabled={isActive === 0}
            onClick={() => setActive(isActive - 1)}
          />
          <ArrowButton
            variant="next"
            isDisabled={areas.length === isActive + 1}
            onClick={() => setActive(isActive + 1)}
          />
        </div>
      </div>
    </div>
  );
}
