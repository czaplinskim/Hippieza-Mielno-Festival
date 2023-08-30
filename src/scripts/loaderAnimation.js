const browserWidth = window.innerWidth;

const pupilAnimation = gsap.timeline().to("#pupil2", {
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  attr: {
    r: 11.5,
  },
});

const eyeAnimation = gsap
  .timeline()
  .to("#eye-closed-top", {
    duration: 0.15,
    repeat: 1,
    yoyo: true,
    attr: {
      d: "M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z",
    },
  })
  .to(
    "#eye-closed-bottom",
    {
      duration: 0.15,
      repeat: 1,
      yoyo: true,
      attr: {
        d: "M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z",
      },
    },
    "<",
  )
  .to(["#pupil1", "#pupil2"], {
    duration: 0.3,
    delay: 0.2,
    repeat: 0,
    attr: {
      cx: "70",
    },
  })
  .to(
    "#eye-closed-top",
    {
      duration: 0.15,
      repeat: 0,
      attr: {
        d: "M30,100 Q100,20 170,100 C170,100 90,50 30,100 Z",
      },
    },
    "<",
  )
  .to(
    "#eye-closed-bottom",
    {
      duration: 0.15,
      repeat: 0,
      yoyo: true,
      attr: {
        d: "M30,100 Q100,180 170,100 C170,100 80,150 30,100 Z",
      },
    },
    "<",
  )
  .to(
    ["#pupil1", "#pupil2"],
    {
      duration: 0.2,
      repeat: 0,
      attr: {
        cy: "105",
        cx: "70",
      },
    },
    1.5,
  )
  .to(
    "#eye-closed-top",
    {
      duration: 0.15,
      repeat: 0,
      attr: {
        d: "M30,100 Q100,20 170,100 C170,100 100,60 30,100 Z",
      },
    },
    "<",
  )
  .to(
    "#eye-closed-bottom",
    {
      duration: 0.15,
      repeat: 0,
      yoyo: true,
      attr: {
        d: "M30,100 Q100,180 170,100 C170,100 100,150 30,100 Z",
      },
    },
    "<",
  )
  .to("#eye-closed-top", {
    duration: 0.15,
    repeat: 1,
    yoyo: true,
    attr: {
      d: "M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z",
    },
  })
  .to(
    "#eye-closed-bottom",
    {
      duration: 0.15,
      repeat: 1,
      yoyo: true,
      attr: {
        d: "M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z",
      },
    },
    "<",
  )
  .to(["#pupil1", "#pupil2"], {
    duration: 0.3,
    delay: 0.2,
    repeat: 0,
    attr: {
      cy: "110",
      cx: "100",
    },
  })
  .to("#eye-closed-top", {
    duration: 0.15,
    repeat: 1,
    yoyo: true,
    attr: {
      d: "M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z",
    },
  })
  .to(
    "#eye-closed-bottom",
    {
      duration: 0.15,
      repeat: 1,
      yoyo: true,
      attr: {
        d: "M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z",
      },
    },
    "<",
  )
  .to(["#pupil1", "#pupil2"], {
    duration: 0.3,
    delay: 0.2,
    repeat: 0,
    attr: {
      cy: "100",
      cx: "100",
    },
  })
  .to("#eye-closed-top", {
    duration: 0.15,
    repeat: 0,
    yoyo: true,
    attr: {
      d: "M30,100 Q100,20 170,100 C170,100 100,100 30,100 Z",
    },
  })
  .to(
    "#eye-closed-bottom",
    {
      duration: 0.15,
      repeat: 0,
      yoyo: true,
      attr: {
        d: "M30,100 Q100,180 170,100 C170,100 100,100 30,100 Z",
      },
    },
    "<",
  )
  .to(["#pupil1", "#pupil2", "#pupil3", "#eye1"], {
    duration: 0.2,
    repeat: 0,
    yoyo: true,
    opacity: 0,
  })
  .to("#eye-closed-top", {
    duration: 0.2,
    repeat: 0,
    yoyo: true,
    attr: {
      d: "M30,100 Q100,100 170,100 C170,100 100,100 30,100 Z",
    },
  })
  .to(
    "#eye-closed-bottom",
    {
      duration: 0.2,
      repeat: 0,
      yoyo: true,
      attr: {
        d: "M30,100 Q100,100 170,100 C170,100 100,100 30,100 Z",
      },
    },
    "<",
  )
  .to(
    "#eye3",
    {
      duration: 0.2,
      repeat: 0,
      attr: {
        d: "M30,100 Q100,100 170,100 M30,100 Q100,100 170,100",
      },
    },
    "<",
  )
  .to(".eye-container", {
    duration: browserWidth / 1000,
    repeat: 0,
    css: {
      "-webkit-mask-image": `radial-gradient(circle at center, transparent 100%, black 100%)`,
      "mask-image": `radial-gradient(circle at center, transparent 100%, black 100%)`,
    },
    onComplete: function () {
      const element = document.querySelector(".eye-container");
      element.parentNode.removeChild(element);
    },
  })
  .to(["body", "html"], {
    repeat: 0,
    css: {
      "overflow-y": "auto",
      position: "revert",
    },
  });

export { pupilAnimation, eyeAnimation, browserWidth };
