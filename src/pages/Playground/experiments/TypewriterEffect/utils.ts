export enum PHRAZES_ENUM {
  PHRAZE1 = "Hello world!",
  PHRAZE2 = "What a beautiful day :)",
  PHRAZE3 = "Let's code something...",
}

export function getNextPhraze(phraze: PHRAZES_ENUM) {
  switch (phraze) {
    case PHRAZES_ENUM.PHRAZE1: {
      return PHRAZES_ENUM.PHRAZE2;
    }
    case PHRAZES_ENUM.PHRAZE2: {
      return PHRAZES_ENUM.PHRAZE3;
    }
    case PHRAZES_ENUM.PHRAZE3: {
      return PHRAZES_ENUM.PHRAZE1;
    }
  }
}
