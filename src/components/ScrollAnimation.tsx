import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { hexToRGBA } from "../utils/colorUtils";
import { RandomBlinkingText } from "./BlinkingText";

type ScrollAnimationProps = {
  image: string | undefined;
  title: string | undefined;
  left?: boolean;
  backgroundColor?: string;
  content?: string | React.ReactNode | undefined;
  
} & React.HTMLAttributes<HTMLDivElement>;

const alternateTexts = [
  "help me!",
  "It's not what it seems",
  "It's all a lie",
  "Don't believe them",
  "They are watching",
  "Nothing is real",
  "Trust no one",
  "Beware of the shadows",
  "Hidden in plain sight",
  "The truth is out there",
  "They know everything",
  "We are not alone",
  "Silence is key",
  "Stay vigilant",
  "Uncover the secrets",
  "Deception is everywhere",
  "Listen to the whispers",
  "They walk among us",
  "The world is an illusion",
  "Unravel the mystery",
];

export const ScrollAnimation = ({
  image,
  title,
  left = false,
  backgroundColor = "bg-slate-900",
  content,
  className,

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

  const gradientStart = hexToRGBA(backgroundColor, 0);
  const gradientEnd = hexToRGBA(backgroundColor, 1);

  const shouldUseReducedMotion = useReducedMotion();

  const styles = {
    bottomShadow: {
      background: `linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 40%)`,
    },
    topShadow: {
      background: `linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 25%)`,
    },
    rightShadow: {
      background: `linear-gradient(-90deg, ${gradientStart} 0%, ${gradientEnd} 40%)`,
    },
    leftShadow: {
      background: `linear-gradient(-90deg,${gradientStart} 0%, ${gradientEnd} 25%)`,
    },
  };

  const backgroundShadow = left ? styles.rightShadow : styles.bottomShadow;

  const imageOpacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className={`snap-center h-screen flex-col justify-between w-full  mx-auto overflow-hidden  flex ${
        left ? "md:flex-row-reverse" : "md:flex-row"
      } ${className} `}
      ref={containerRef}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex items-center flex-col justify-center gap-4 w-full h-1/2 md:h-full md:w-1/2 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl mt-0  p-4">
          <RandomBlinkingText
            text={title || ""}
            alternateTexts={alternateTexts}
            blinkDuration={250}
            minInterval={4000}
            maxInterval={8000}
          />{" "}
        </h2>
        <div className="p-4 text-left">
          {content}
        </div>

      </div>
      <div className="h-1/2 md:w-1/2 w-full  md:h-full flex items-center relative">
        <motion.div
          className="img-inner w-full h-full object-cover"
          style={{ translateX: shouldUseReducedMotion ? 0 : imageValue }}
        >
          {!shouldUseReducedMotion && (
            <motion.div
              className={`h-full w-full absolute left-0 z-0 `}
              style={{ translateX: bottomShadowValue, ...backgroundShadow }}
            />
          )}
          <motion.img
            className="w-full h-full relative z-1 object-cover"
            src={image}
            alt="a bowl of spag"
            style={{ opacity: shouldUseReducedMotion ? 1 : imageOpacityValue }}
          />
        </motion.div>
      </div>
    </section>
  );
};
