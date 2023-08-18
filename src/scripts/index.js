
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}





gsap.registerPlugin(MotionPathPlugin);

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


// START ANIMATION

const t3 = gsap.timeline()
.to("#pupil2", {
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    attr: {
        r: 11.5
    }
})

const tl = gsap.timeline()
.to("#eye-closed-top", {
duration: 0.15,
repeat: 1,
yoyo: true,
attr:{
d:"M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z" 
}})
.to("#eye-closed-bottom", {
duration: 0.15,
repeat: 1,
yoyo: true,
attr:{
d:"M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z"  
}}, "<")
.to(["#pupil1", "#pupil2"], {
duration: 0.3,
delay: 0.2,
repeat: 0,
attr:{
    cx:"70"  
}})
.to("#eye-closed-top", {
duration: 0.15,
repeat: 0,
attr:{
d:"M30,100 Q100,20 170,100 C170,100 90,50 30,100 Z"
}}, "<")
.to("#eye-closed-bottom", {
duration: 0.15,
repeat: 0,
yoyo: true,
attr:{
d:"M30,100 Q100,180 170,100 C170,100 80,150 30,100 Z"  
}}, "<")
.to(["#pupil1", "#pupil2"], {
duration: 0.2,
repeat: 0,
attr:{
    cy:"105", 
    cx:"70"  
}},1.5)
.to("#eye-closed-top", {
duration: 0.15,
repeat: 0,
attr:{
d:"M30,100 Q100,20 170,100 C170,100 100,60 30,100 Z"
}}, "<")
.to("#eye-closed-bottom", {
duration: 0.15,
repeat: 0,
yoyo: true,
attr:{
d:"M30,100 Q100,180 170,100 C170,100 100,150 30,100 Z"  
}}, "<")
.to("#eye-closed-top", {
duration: 0.15,
repeat: 1,
yoyo: true,
attr:{
d:"M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z" 
}})
.to("#eye-closed-bottom", {
duration: 0.15,
repeat: 1,
yoyo: true,
attr:{
d:"M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z"  
}}, "<")
.to(["#pupil1", "#pupil2"], {
duration: 0.3,
delay: 0.2,
repeat: 0,
attr:{
    cy:"110", 
    cx:"100"   
}})
.to("#eye-closed-top", {
duration: 0.15,
repeat: 1,
yoyo: true,
attr:{
d:"M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z" 
}})
.to("#eye-closed-bottom", {
duration: 0.15,
repeat: 1,
yoyo: true,
attr:{
d:"M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z"  
}}, "<")
.to(["#pupil1", "#pupil2"], {
duration: 0.3,
delay: 0.2,
repeat: 0,
attr:{
    cy:"100", 
    cx:"100"   
}})
.to("#eye-closed-top", {
duration: 0.15,
repeat: 0,
yoyo: true,
attr:{
d:"M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z" 
}})
.to("#eye-closed-bottom", {
duration: 0.15,
repeat: 0,
yoyo: true,
attr:{
d:"M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z"  
}}, "<")
.to(["#pupil1", "#pupil2", "#pupil3", "#eye1" ], {
duration: 0.2,
repeat: 0,
yoyo: true,
opacity: 0
})
.to("#eye-closed-top", {
duration: 0.2,
repeat: 0,
yoyo: true,
attr:{
d:"M30,100 Q100,100 170,100 C170,100 100,100 30,100 Z"
}})
.to("#eye-closed-bottom", {
duration: 0.2,
repeat: 0,
yoyo: true,
attr:{
d:"M30,100 Q100,100 170,100 C170,100 100,100 30,100 Z" 
}}, "<")
.to("#eye3", {
duration: 0.2,
repeat: 0,
attr:{
d:"M30,100 Q100,100 170,100 M30,100 Q100,100 170,100"
}}, "<")
.to(".eye-container", {
duration: 1.5,
repeat: 0,
css:{
'-webkit-mask-image': 'radial-gradient(circle at center, transparent 1000px, black 1000px)',
'mask-image': 'radial-gradient(circle at center, transparent 50px, black 51px)'
}, 
onComplete: function() {
  const element = document.querySelector(".eye-container");
  element.parentNode.removeChild(element);

  

}})
.to("body", {
  repeat: 0,
css:{
'overflow-y': 'auto',
},
onComplete: function() {


}
})

const backgroundAudio = document.getElementById("backgroundAudio")
const soundButton = document.getElementById("soundButton")

soundButton.addEventListener("click", function() {


if(backgroundAudio.paused) {
  
  const timeline3 = gsap.timeline()
  .to("#note1", {
  duration: 0.5,
  opacity: 1,
  onStart: function() {
    backgroundAudio.play()
  }
  })
  .to("#note2", {
    duration: 0.5,
    opacity: 1
  }, "<")


} else  {
  
  const timeline4 = gsap.timeline()
.to("#note1", {
duration: 0.5,
opacity: 0,
onStart: function() {
  backgroundAudio.pause()
}
})
.to("#note2", {
  duration: 0.5,
  opacity: 0
}, "<")

  
}


})


const timeline2 = gsap.timeline()
.to("#note1", {
duration: 4,
repeat: -1,
x: 45,
y: -35,
width: 12
})
.to("#note2", {
duration: 4,
repeat: -1,
x: 25,
y: -35,
width: 12
}, ">")






