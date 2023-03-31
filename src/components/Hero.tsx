import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import useBlockScrolling from "../hooks/useBlockScrolling";

type HeroProps = {
  image: string | undefined;
  title: string | undefined;
};

const Hero = ({ image, title }: HeroProps) => {
  const containerRef = useRef(null);

  const {blockScrolling, unblockScrolling} = useBlockScrolling("top");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const shouldUseReducedMotion = useReducedMotion();

  useEffect(() => {
    blockScrolling();
    }, []);

  const animationDone = () => {
    unblockScrolling();
    };
    

  return (
    <section
      className={`min-h-screen flex justify-between max-w-6xl mx-auto overflow-hidden `}
      ref={containerRef}
    >
      <div className="flex items-center w-full text-center flex-col justify-center  text-white text-6xl ">
        <motion.div>
          <h1>
            {
              title
                ?.split(" ")
                .slice(0, -1)
                .map((word, index) => (
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: index * .75, delay:  0.6 * index }}
                  >
                    {word + " "}
                  </motion.span>
                ))
            }

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              onAnimationComplete={animationDone}
              className="text-white text-7xl font-bold"
            >
              {
                // add the last word
                title?.split(" ").slice(-1).join(" ")
              }
            </motion.span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
