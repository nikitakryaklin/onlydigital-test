import { useRef, type HTMLProps, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function DelayRender({
  children,
  isVisiable = true,
  y,
  ...divProps
}: {
  children: ReactNode;
  isVisiable?: boolean;
  y?: { from: { y: number }; to: { y: number } };
} & HTMLProps<HTMLDivElement>) {
  const divRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    gsap.fromTo(
      divRef.current,
      { opacity: 0, ...y?.from },
      {
        opacity: 1,
        duration: 0.7,
        ...y?.to,
        ease: "power2.out",
      }
    );
  };

  const onExit = () => {
    gsap.to(divRef.current, {
      opacity: 0,
      ...y?.to,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <CSSTransition
      in={isVisiable}
      timeout={300}
      mountOnEnter
      unmountOnExit
      nodeRef={divRef}
      onEnter={onEnter}
      onExit={onExit}
    >
      <div ref={divRef} {...divProps}>
        {children}
      </div>
    </CSSTransition>
  );
}
