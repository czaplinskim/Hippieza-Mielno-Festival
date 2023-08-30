import { animateGradientColorsListner } from "./backgroundAnimation.js";
import {
  movingCloud,
  flyingMushroomOne,
  flyingMushroomTwo,
} from "./movingElementsAnimations.js";
import { initializeSoundButton } from "./backgroundSound.js";
import { pupilAnimation, eyeAnimation } from "./loaderAnimation.js";

gsap.registerPlugin(MotionPathPlugin);

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

pupilAnimation.play();
eyeAnimation.play();
movingCloud();
flyingMushroomOne();
flyingMushroomTwo();
initializeSoundButton();
animateGradientColorsListner();
