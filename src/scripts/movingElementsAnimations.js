gsap.registerPlugin(MotionPathPlugin);

// Clouds 

const cloudToMove = document.querySelector('#cloudToMove');

export const movingCloud = () => { return  gsap.to(cloudToMove, {
  x: 400,
  ease: 'none',
  repeat: -1,
  yoyo: true,
  duration: 6,
}); }

// Mushrooms

const flyingMushroom1 = document.querySelector('#flyingMushroom1');
const flyingMushroom2 = document.querySelector('#flyingMushroom2');

const pathOne = [
    { x: 0, y: 0 },
    { x: 300, y: -150 },
    { x: 150, y: -350 },
    { x: -500, y: -350 },
    { x: -500, y: -350 },
    { x: 100, y: -550 },
    { x: 700, y: -250 },
    { x: 1100, y: -450 },
    { x: 300, y: -150 },
    { x: 150, y: -350 },
    { x: -500, y: -350 },
    { x: -500, y: -350 },
    { x: 100, y: -550 },
    { x: 700, y: -250 },
    { x: 1100, y: -450 },
    { x: 0, y: 0 },
];

const pathTwo = [
    { x: 0, y: 0 },
    { x: -800, y: -200 },
    { x: -800, y: 400 },
    { x: -400, y: -200 },
    { x: -400, y: 200 },
    { x: -800, y: -200 },
    { x: -800, y: 400 },
    { x: -1200, y: 500 },
    { x: 0, y: 0 },
];

const createMotionTimeline = (element, path) => {
  return gsap.timeline({
    repeat: -1,
    yoyo: false,
    ease: 'linear',
  }).to(element, {
    duration: 40,
    ease: 'linear',
    motionPath: {
      path: path,
      alignOrigin: [0.5, 0.5],
      curviness: 1,
      autoRotate: 90,
    },
  });
};

export const flyingMushroomOne = () => { return createMotionTimeline(flyingMushroom1, pathOne) }
export const flyingMushroomTwo = () => { return createMotionTimeline(flyingMushroom2, pathTwo)}