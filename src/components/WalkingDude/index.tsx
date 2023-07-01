import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const dudeWidth = 28;
const dudeHeight = 49;
const dudeAnimationFramesCount = 9;

const WalkingDude = () => {
  const [currentWalkingFrame, setCurrentWalkingFrame] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentWalkingFrame < dudeAnimationFramesCount - 1) {
        setCurrentWalkingFrame(currentWalkingFrame + 1);
      } else {
        setCurrentWalkingFrame(0);
      }
    }, 150);
  }, [currentWalkingFrame]);

  const right = useMotionValue(0);
  const scaleX = useMotionValue(1);

  const handleUpdate = () => {
    if (right.get() < right.getPrevious()) {
      scaleX.set(1);
    } else {
      scaleX.set(-1);
    }
  };

  return (
    <motion.div
      style={{
        cursor: "pointer",
        width: `${dudeWidth}px`,
        minHeight: `${dudeHeight}px`,
        background: `url(DudeWalking.png) -${currentWalkingFrame * dudeWidth}px 0`,
        position: "fixed",
        bottom: 0,
        right: right,
        scaleX,
      }}
      animate={{ right: [0, 200, 0] }}
      transition={{
        right: { duration: 14, ease: "linear", repeat: Infinity, onUpdate: handleUpdate },
      }}
    />
  );
};

export default WalkingDude;
