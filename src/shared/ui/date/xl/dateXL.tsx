import clsx from "clsx";
import styles from "./date.module.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function DateXL({
  date,
  variant = "blue",
}: {
  date: number;
  variant: "pink" | "blue";
}) {
  const dateRef = useRef<HTMLParagraphElement>(null);
  const prevValue = useRef(date);

  useGSAP(
    () => {
      const obj = { val: prevValue.current };

      gsap.to(obj, {
        val: date,
        duration: 0.7,
        ease: "power1.out",
        onUpdate: () => {
          if (!dateRef.current) return;
          dateRef.current.textContent = Math.floor(obj.val).toString();
        },
      });
    },
    { dependencies: [date] }
  );

  return (
    <p
      ref={dateRef}
      className={clsx(
        styles.date,
        variant === "pink" && styles.pink,
        variant === "blue" && styles.blue
      )}
    >
      {prevValue.current}
    </p>
  );
}
