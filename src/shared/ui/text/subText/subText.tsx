import type { HTMLProps } from "react";

import styles from "./subText.module.scss";
import clsx from "clsx";

export function SubText({
  text,
  className,
  ...textProps
}: { text: string } & HTMLProps<HTMLParagraphElement>) {
  return (
    <p className={clsx(styles.subText, className)} {...textProps}>
      {text}
    </p>
  );
}
