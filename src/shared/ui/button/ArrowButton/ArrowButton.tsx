import clsx from "clsx";
import styles from "./ArrowButton.module.scss";
import type { HTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ArrowButton({
  variant,
  isDisabled,
  className,
  ...buttonProps
}: {
  variant: "prev" | "next";
  isDisabled: boolean;
} & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        styles.arrowButton,
        className,
        isDisabled && styles.arrowButtonDisabled
      )}
      {...buttonProps}
      disabled={isDisabled}
    >
      {variant === "prev" && <ChevronLeft />}
      {variant === "next" && <ChevronRight />}
    </button>
  );
}
