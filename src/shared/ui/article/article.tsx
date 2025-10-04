import clsx from "clsx";
import { DateXs } from "../date/xs/dateXS";
import styles from "./article.module.scss";

export function Article({
  year,
  description,
  className,
}: {
  year: number;
  description: string;
  className?: string;
}) {
  return (
    <article className={clsx(styles.article, className)}>
      <DateXs date={year} />
      <p>{description}</p>
    </article>
  );
}
