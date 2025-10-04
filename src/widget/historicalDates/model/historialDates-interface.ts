export type TAreas =
  | "Музыка"
  | "Кино"
  | "Литература"
  | "Театр"
  | "Живопись"
  | "Наука";

export interface IEvent {
  id: string;
  year: number;
  description: string;
}

export interface IHistorial {
  id: number;
  area: string;
  years: number[];
  events: IEvent[];
}
