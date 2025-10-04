import { HistoricalDates } from "@/widget";
import {
  HISTORIAL_DATES_DATA,
  HISTORIAL_DATES_TITlE,
} from "../../config/historialDates-data";

export function HomePage() {
  return (
    <main>
      <HistoricalDates
        title={HISTORIAL_DATES_TITlE}
        data={HISTORIAL_DATES_DATA}
      />
      <HistoricalDates
        title={HISTORIAL_DATES_TITlE}
        data={HISTORIAL_DATES_DATA}
      />
    </main>
  );
}
