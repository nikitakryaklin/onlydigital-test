import styles from "./date.module.scss";

export function DateXs({ date }: { date: string | number }) {
  return <h4 className={styles.date}>{date}</h4>;
}
