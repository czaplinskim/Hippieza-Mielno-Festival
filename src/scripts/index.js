

const cloudToMove = document.querySelector("#cloudToMove")

gsap.to(cloudToMove, { 
    x: -200,
    ease: "none",
    repeat: -1,
    yoyo: true,
    duration: 6
})


const flyingMushroom1 = document.querySelector('#flyingMushroom1')

console.log(flyingMushroom1)

const t1 = gsap.timeline({repeat: -1, yoyo: true, ease: "none"})

const path = [
    { x: 0, y: 0 },
    { x: 300, y: -150 },
    { x: 0, y: -350 },
    { x: -500, y: -350 },
    { x: -500, y: -350 },
    { x: 100, y: -550 },
    { x: 700, y: -250 },
]


t1.to(flyingMushroom1, {
    duration: 20,
    motionPath: {
        path: path,
        alignOrigin: [0.5, 0.5],
        curviness: 2,
        autoRotate: 90
    }
})