import path from "path";
import webpack from "webpack";

import { buildWebpack } from "./webpack/build/buildWebpack";
import { IPaths } from "./webpack/build/types/webpackOptions-types";

type TMode = "development" | "production";

interface IEnv {
  mode?: TMode;
  port?: number;
}

const paths: IPaths = {
  entry: path.resolve(__dirname, "src", "app", "main.tsx"),
  html: path.resolve(__dirname, "index.html"),
  output: path.resolve(__dirname, "build"),
  src: path.resolve(__dirname, "src"),
  public: path.resolve(__dirname, "public"),
};

export default (env: IEnv) => {
  const config: webpack.Configuration = buildWebpack({
    port: env.port || 3000,
    mode: env.mode || "development",
    paths,
  });

  return config;
};
