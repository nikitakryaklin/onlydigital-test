import { useState } from "react";
import { Widget } from "@/shared";
import styles from "./historical-dates.module.scss";
import { HistoricalDatesTimeline } from "./historicalDates-timeline/ui/historicalDates-timeline";
import { HistoricalDatesEvents } from "./historicalDates-events/ui/historicalDates-events";
import { IHistorial } from "../model/historialDates-interface";

export function HistoricalDates({
  title,
  data,
}: {
  title: string;
  data: IHistorial[];
}) {
  const [currentArea, setCurrentArea] = useState(0);
  const [isVisiable, setIsVisiable] = useState(true);
  const [historialData, setHistorialData] = useState<IHistorial>(data[0]);

  const deleayChangeData = (currentArea: number) => {
    setTimeout(() => {
      setHistorialData(data[currentArea]);
      setIsVisiable(true);
    }, 1000);
  };

  const setIsActive = (activeElement: number) => {
    setCurrentArea((prev) => (prev === activeElement ? prev : activeElement));
    setIsVisiable(false);
    deleayChangeData(activeElement);
    console.log(activeElement);
  };

  return (
    <div className={styles.wrapper}>
      <Widget>
        <h1>{title}</h1>
      </Widget>
      <HistoricalDatesTimeline
        areas={data}
        area={{ area: historialData.area, isVisiable: isVisiable }}
        isActive={currentArea}
        setIsActive={setIsActive}
      />
      <HistoricalDatesEvents
        isVisiable={isVisiable}
        data={historialData.events}
      />
    </div>
  );
}
