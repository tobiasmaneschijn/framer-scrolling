import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import useBlockScrolling from "tm-hooks/lib/useBlockScrolling";

type HeroProps = {
  image: string | undefined;
  title: string | undefined;
  content?: string | undefined;
  onAnimationComplete?: () => void;
};

const Hero = ({ image, title, onAnimationComplete, content }: HeroProps) => {
  const containerRef = useRef(null);
  const { blockScrolling, unblockScrolling } = useBlockScrolling("top");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const shouldUseReducedMotion = useReducedMotion();
  const wordCount = title?.split(" ").length || 0;
  useEffect(() => {
    blockScrolling();
  }, []);

  const animationDone = () => {
    unblockScrolling();

    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <section
      className={`min-h-screen relative flex justify-between mx-auto overflow-hidden snap-center`}
      ref={containerRef}
    >
      <motion.img
        src={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 * wordCount }}
        className="
        w-full h-full absolute top-0 left-0 z-0 object-cover
      "
      />

      <div className="max-w-6xl flex z-10 items-center w-full mx-auto text-center flex-col justify-center  text-white text-6xl ">
        <motion.div>
          <h1>
            {title?.split(" ").map((word, index) => (
              <motion.span
                className="text-shadow"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: index * 0.25, delay: 0.2 * index }}
                onAnimationComplete={
                  index === wordCount - 1 ? animationDone : undefined
                }
              >
                {word + " "}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2 * wordCount,
          }}
          className=" mt-4"
        >
          <p
            className="
          text-2xl 
          text-shadow
          "
          >
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
