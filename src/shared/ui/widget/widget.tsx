import type { HTMLProps, ReactNode } from "react";
import styles from "./widget.module.scss";
import clsx from "clsx";

export function Widget({
  children,
  className,
  ...divProps
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx(styles.widget, className)} {...divProps}>
      {children}
    </div>
  );
}
