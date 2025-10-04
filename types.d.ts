declare module "*.module.scss" {
  const classNames: { [className: string]: string };
  export default classNames;
}

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
declare module "*.gif";
declare module "*.webp";
declare module "*.avif";
