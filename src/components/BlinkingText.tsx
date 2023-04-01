import React, { useState, useEffect } from 'react';

type RandomBlinkingTextProps = {
  text: string;
  alternateTexts: string[];
  minInterval?: number;
  maxInterval?: number;
  blinkDuration?: number;
  className?: string;
};

export const RandomBlinkingText = ({
  text,
  alternateTexts,
  minInterval = 1000,
  maxInterval = 5000,
  blinkDuration = 100,
  className,
}: RandomBlinkingTextProps) => {
  const [displayText, setDisplayText] = useState(text);

  const getRandomInterval = () => {
    return Math.random() * (maxInterval - minInterval) + minInterval;
  };

  const getRandomAlternateText = () => {
    const index = Math.floor(Math.random() * alternateTexts.length);
    return alternateTexts[index];
  };

  useEffect(() => {
    const blink = () => {
      setDisplayText(getRandomAlternateText());
      setTimeout(() => {
        setDisplayText(text);
      }, blinkDuration);
    };

    const startBlinking = () => {
      const interval = getRandomInterval();
      setTimeout(() => {
        blink();
        startBlinking();
      }, interval);
    };

    startBlinking();
  }, [text, alternateTexts, minInterval, maxInterval, blinkDuration]);

  return <p className={className}>{displayText}</p>;
};


