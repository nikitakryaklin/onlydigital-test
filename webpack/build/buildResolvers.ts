import { Configuration } from "webpack";
import { IWebpackOptions } from "./types/webpackOptions-types";
import path from "path";

export function buildResolvers(
  options: IWebpackOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": options.paths.src,
    },
  };
}
