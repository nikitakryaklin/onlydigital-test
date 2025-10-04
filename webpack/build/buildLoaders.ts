import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IWebpackOptions } from "./types/webpackOptions-types";
import path from "path";

export function buildLoaders({
  mode,
  paths,
}: IWebpackOptions): ModuleOptions["rules"] {
  const isDev = mode === "development";

  // CSS-модули
  const cssModuleLoader = {
    loader: "css-loader",
    options: {
      esModule: false,
      modules: {
        localIdentName: isDev
          ? "[name]__[local]-[hash:base64:2]"
          : "[hash:base64:8]",
      },
    },
  };

  // Обычные CSS без модулей
  const cssLoader = {
    loader: "css-loader",
    options: {
      esModule: false,
      modules: false,
    },
  };

  const scssLoader = {
    loader: "sass-loader",
    options: {
      additionalData: (content: string, loaderContext: any) => {
        if (loaderContext.resourcePath.endsWith("global.scss")) {
          return content;
        }
        return `@use "@/app/global.scss" as *;\n${content}`;
      },
      sassOptions: {
        includePaths: [path.resolve(paths.src, "app")],
      },
    },
  };

  // Правила для SCSS модулей
  const scssModuleRule = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssModuleLoader,
      scssLoader,
    ],
  };

  // Правила для глобальных SCSS
  const scssRule = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoader,
      scssLoader,
    ],
  };

  // CSS-модули
  const cssModuleRule = {
    test: /\.module\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssModuleLoader,
    ],
  };

  // Глобальные CSS
  const cssRule = {
    test: /\.css$/i,
    exclude: /\.module\.css$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, cssLoader],
  };

  // Загрузчик картинок
  const fileLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  // SVG через SVGR
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: "@svgr/webpack", options: { icon: true } }],
  };

  // TypeScript
  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: { transpileOnly: isDev },
      },
    ],
  };

  return [
    cssRule,
    cssModuleRule,
    scssRule,
    scssModuleRule,
    fileLoader,
    svgLoader,
    tsLoader,
  ];
}
