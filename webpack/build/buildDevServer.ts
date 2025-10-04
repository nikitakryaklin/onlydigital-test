import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IWebpackOptions } from "./types/webpackOptions-types";

export function buildDevServer(
  options: IWebpackOptions
): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
