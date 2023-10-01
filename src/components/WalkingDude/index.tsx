import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Popper, Box } from "@mui/material";
import { generateDudeTalkingText } from "./gpt";

const walkingDudeWidth = 28;
const walkingDudeHeight = 49;
const walkingDudeAnimationFramesCount = 8;
const idleDudeWidth = 64;
const idleDudeHeight = 49;
const idleDudeAnimationFramesCount = 5;
const walkDistance = 375 - walkingDudeWidth;

type AnimationType = "walking" | "idle";
export function getMaxAnimationFramesCount(animationType: AnimationType) {
  switch (animationType) {
    case "walking":
      return walkingDudeAnimationFramesCount;
    case "idle":
      return idleDudeAnimationFramesCount;
  }
}

//todo: get rid of framer motion lib
const WalkingDude = () => {
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("walking");
  const [animationFrames, setAnimationFrames] = useState<Record<AnimationType, number>>({
    walking: 0,
    idle: 0,
  });
  const [walkingDirection, setWalkingDirection] = useState<"left" | "right">("left");
  const right = useMotionValue(0);
  const [talkingText, setTalkingText] = useState("");
  const isWalking = currentAnimation === "walking";

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    if (!anchorEl) {
      setCurrentAnimation("idle");
      setAnchorEl(event.currentTarget);
      setTalkingText(await generateDudeTalkingText());
      setTimeout(() => {
        setCurrentAnimation("walking");
        setTalkingText("");
        setAnchorEl(null);
      }, 8000);
    }
  };

  const open = Boolean(anchorEl);

  // update dude animation frame
  useEffect(() => {
    setTimeout(() => {
      const currentFrame = animationFrames[currentAnimation];
      const maxFramesCount = getMaxAnimationFramesCount(currentAnimation);

      if (currentFrame < maxFramesCount - 1) {
        setAnimationFrames({ ...animationFrames, [currentAnimation]: currentFrame + 1 });
      } else {
        setAnimationFrames({ ...animationFrames, [currentAnimation]: 0 });
      }
    }, 150);
  }, [currentAnimation, animationFrames[currentAnimation]]);

  // update dude position
  useAnimationFrame(() => {
    if (isWalking) {
      const val = right.get();
      const speedMultiplier = 1 / 2;
      const newVal = val + (walkingDirection === "left" ? 1 : -1) * speedMultiplier;
      right.set(newVal);
      if (val <= 0) {
        setWalkingDirection("left");
      } else if (val >= walkDistance) {
        setWalkingDirection("right");
      }
    }
  });

  return (
    <>
      <motion.div
        onClick={handleClick}
        style={{
          zIndex: 2,
          cursor: "url('/Link select.cur'), auto",
          width: `${walkingDudeWidth}px`,
          minHeight: `${isWalking ? walkingDudeHeight : idleDudeHeight}px`,
          background: isWalking
            ? `url(/DudeWalking.png) -${animationFrames.walking * walkingDudeWidth}px 0px`
            : `url(/DudeLookingUp.png) -${animationFrames.idle * idleDudeWidth}px 0px`,
          position: "fixed",
          bottom: 0,
          right: right,
          scaleX: walkingDirection === "left" ? -1 : 1,
        }}
      ></motion.div>

      <Popper
        placement='top-end'
        open={open}
        anchorEl={anchorEl}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [-20, 10],
            },
          },
        ]}
        sx={{ maxWidth: { xs: "80%", sm: "50%" } }}
      >
        <Box
          component={"div"}
          sx={{
            borderImage: "url(/balloon.png) 40 50 60 50 round",
            borderWidth: "28px 17px 40px 21px",
            borderStyle: "solid",
            bgcolor: "transparent",
            filter: (theme) => `drop-shadow(${theme.shadows[3]})`,
          }}
        >
          <Box component={"div"} sx={{ backgroundColor: "white", color: "black" }}>
            {talkingText}
          </Box>
        </Box>
      </Popper>
    </>
  );
};

export default WalkingDude;
