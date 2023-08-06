const cloudToMove = document.querySelector("#cloudToMove")

gsap.to(cloudToMove, { 
    x: 400,
    ease: "none",
    repeat: -1,
    yoyo: true,
    duration: 6
})


const flyingMushroom1 = document.querySelector('#flyingMushroom1')
const flyingMushroom2 = document.querySelector('#flyingMushroom2')

const t1 = gsap.timeline({repeat: -1, yoyo: false, ease: "linear"})
const t2 = gsap.timeline({repeat: -1, yoyo: false, ease: "linear"})

const path = [
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
]

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
]


t1.to(flyingMushroom1, {
    duration: 40,
    ease: "linear",
    motionPath: {
        path: path,
        alignOrigin: [0.5, 0.5],
        curviness: 1,
        autoRotate: 90
    }
})


t2.to(flyingMushroom2, {
    duration: 40,
    ease: "linear",
    motionPath: {
        path: pathTwo,
        alignOrigin: [0.5, 0.5],
        curviness: 1,
        autoRotate: 90
    }
})


// GRADIENT

const checkbox = document.getElementById('toggle_checkbox');
const element = document.querySelector('body');


function animateGradientColors() {
  if (checkbox.checked) {

    gsap.to(element, {
      background: "linear-gradient(0, rgba(23, 173, 209, 1) 50%, rgba(0, 10, 120, 1) 100%)", 
      duration: 1, 
      ease: "power1.inOut" 
    });
  } else {
    
    gsap.to(element, {
      background: "linear-gradient(0, rgba(241,223,102,1) 50%, rgba(83,155,210,1) 100%)", 
      duration: 1, 
      ease: "power1.inOut" 
    });
  }
}


checkbox.addEventListener('change', animateGradientColors);