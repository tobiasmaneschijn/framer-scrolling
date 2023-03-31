import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import spaghettiBowl from "../assets/spaghetti-bowl.png";

type ScrollAnimationProps = {
    image : string | undefined;
    title : string | undefined;
};


export const ScrollAnimation = (
    { image, title }: ScrollAnimationProps
) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );

  const shouldUseReducedMotion = useReducedMotion();

  return (
    <section
      className={ `min-h-screen flex justify-between max-w-6xl mx-auto overflow-hidden `}
      ref={containerRef}
    >
      <div className="flex items-center flex-col justify-center w-2/6 text-lg ml-[5%] text-left">
        <h2 className="text-6xl mt-0">{title}</h2>
      </div>
      <div className="w-1/2 flex items-center relative">
        <motion.div
          className="img-inner"
          style={{ translateX: shouldUseReducedMotion ? 0 : imageValue }}
        >
          {!shouldUseReducedMotion && (
            <motion.div
              className="bottom-shadow h-full w-full absolute left-0 z-0"
              style={{ translateX: bottomShadowValue }}
            />
          )}
          <img
            className="max-w-3xl w-full h-auto relative z-1"
            src={image}
            alt="a bowl of spag"
          />
          {!shouldUseReducedMotion && (
            <motion.div
              className="top-shadow h-full w-[140%] absolute left-0 top-0 z-2"
              style={{ translateX: topShadowValue }}
            />
          )}{" "}
        </motion.div>
      </div>
    </section>
  );
};
