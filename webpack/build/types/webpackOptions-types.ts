export interface IPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export type TMode = "development" | "production";

export interface IWebpackOptions {
  port?: number;
  paths: IPaths;
  mode: TMode;
}
