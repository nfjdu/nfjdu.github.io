import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const walkingDudeWidth = 28;
const walkingDudeHeight = 49;
const walkingDudeAnimationFramesCount = 8;
const idleDudeWidth = 64;
const idleDudeHeight = 49;
const idleDudeAnimationFramesCount = 5;

const WalkingDude = () => {
  const [currentAnimation, setCurrentAnimation] = useState<"walking" | "idle">("walking");
  const [currentWalkingFrame, setCurrentWalkingFrame] = useState(0);
  const [currentIdleFrame, setCurrentIdleFrame] = useState(0);
  const [walkingDirection, setWalkingDirection] = useState<"left" | "right">("left");
  const isWalking = currentAnimation === "walking";

  // update dude animation frame
  useEffect(() => {
    setTimeout(() => {
      const currentFrame = isWalking ? currentWalkingFrame : currentIdleFrame;
      const maxFramesCount = isWalking
        ? walkingDudeAnimationFramesCount
        : idleDudeAnimationFramesCount;
      const setFn = isWalking ? setCurrentWalkingFrame : setCurrentIdleFrame;

      if (currentFrame < maxFramesCount - 1) {
        setFn(currentFrame + 1);
      } else {
        setFn(0);
      }
    }, 150);
  }, [currentWalkingFrame, currentIdleFrame, isWalking]);

  const right = useMotionValue(0);

  // update dude position
  useAnimationFrame(() => {
    if (isWalking) {
      const val = right.get();
      const newVal = val + (walkingDirection === "left" ? 1 : -1);
      right.set(newVal);
      if (val <= 0) {
        setWalkingDirection("left");
      } else if (val >= 200) {
        setWalkingDirection("right");
      }
    }
  });

  return (
    <motion.div
      onClick={() => setCurrentAnimation(isWalking ? "idle" : "walking")}
      style={{
        cursor: "pointer",
        width: `${walkingDudeWidth}px`,
        minHeight: `${isWalking ? walkingDudeHeight : idleDudeHeight}px`,
        background: isWalking
          ? `url(DudeWalking.png) -${currentWalkingFrame * walkingDudeWidth}px 0px`
          : `url(DudeLookingUp.png) -${currentIdleFrame * idleDudeWidth}px 0px`,
        position: "fixed",
        bottom: 0,
        right: right,
        scaleX: walkingDirection === "left" ? -1 : 1,
      }}
    />
  );
};

export default WalkingDude;
