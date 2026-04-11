export type AnimationType = "walking" | "idle";

const walkingDudeAnimationFramesCount = 8;
const idleDudeAnimationFramesCount = 5;

export function getMaxAnimationFramesCount(animationType: AnimationType) {
  switch (animationType) {
    case "walking":
      return walkingDudeAnimationFramesCount;
    case "idle":
      return idleDudeAnimationFramesCount;
    default:
      return walkingDudeAnimationFramesCount;
  }
}
