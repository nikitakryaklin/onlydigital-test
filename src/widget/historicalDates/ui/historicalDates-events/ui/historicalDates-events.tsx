import { DelayRender, SwiperWrapper } from "@/shared";
import styles from "./historicalDates-events.module.scss";
import { Article } from "@/shared";

type THistoricalDatesEvents = {
  id: string;
  year: number;
  description: string;
};

export function HistoricalDatesEvents({
  data,
  isVisiable,
}: {
  isVisiable: boolean;
  data: THistoricalDatesEvents[];
}) {
  return (
    <DelayRender
      isVisiable={isVisiable}
      className={styles.events}
      y={{ from: { y: 5 }, to: { y: 0 } }}
    >
      <SwiperWrapper<THistoricalDatesEvents>
        args={data}
        render={({ year, description }) => (
          <Article year={year} description={description} />
        )}
      />
    </DelayRender>
  );
}

//
