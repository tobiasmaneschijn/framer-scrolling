import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type ScrollAnimationProps = {
  image: string | undefined;
  title: string | undefined;
  left?: boolean;
};

export const ScrollAnimation = ({
  image,
  title,
  left = false,
}: ScrollAnimationProps) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    left ? ["100%", "0%"] : ["-100%", "0%"]
  );
  const imageValue = useTransform(
    scrollYProgress,
    [0, 1],
    left ? ["100%", "0%"] : ["-100%", "0%"]
  );
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    left ? ["25%", "-100%"] : ["-25%", "100%"]
  );

  const shouldUseReducedMotion = useReducedMotion();

  return (
    <section
      className={`min-h-screen flex ${
        left ? "flex-row-reverse" : "flex-row"
      } justify-between max-w-6xl mx-auto overflow-hidden`}
      ref={containerRef}
    >
      <div className="flex items-center flex-col justify-center w-2/6 ml-[5%] text-left">
        <h2 className="text-2xl lg:text-6xl mt-0 ">{title}</h2>
      </div>
      <div className="w-1/2 flex items-center relative">
        <motion.div
          className="img-inner"
          style={{ translateX: shouldUseReducedMotion ? 0 : imageValue }}
        >
          {!shouldUseReducedMotion && (
            <motion.div
              className={`${
                left ? "right-shadow" : "bottom-shadow"
              } h-full w-full absolute left-0 z-0`}
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
              className={`${
                left ? "left-shadow" : "top-shadow"
              } h-full w-[140%] absolute left-0 top-0 z-2`}
              style={{ translateX: topShadowValue }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};
