import animateGradientColorsListner from "./backgroundAnimation.js";
import { movingCloud, flyingMushroomOne, flyingMushroomTwo } from "./movingElementsAnimations.js";

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

animateGradientColorsListner
movingCloud
flyingMushroomOne
flyingMushroomTwo



gsap.registerPlugin(MotionPathPlugin);




// START ANIMATION

const browserWidth = window.innerWidth;

const t3 = gsap.timeline().to("#pupil2", {
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  attr: {
    r: 11.5,
  },
});

const tl = gsap
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
    duration: browserWidth/1000,
    repeat: 0,
    css: {
      "-webkit-mask-image":
        // `radial-gradient(circle at center, transparent ${browserWidth / 1.5}px, black ${browserWidth / 1.5}px)`,
        `radial-gradient(circle at center, transparent 100%, black 100%)`,
      "mask-image":
        `radial-gradient(circle at center, transparent 100%, black 100%)`,
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
      "position": "initial"
    },
    onComplete: function () {},
  });

const backgroundAudio = document.getElementById("backgroundAudio");
const soundButton = document.getElementById("soundButton");

soundButton.addEventListener("click", function () {

  
  if (backgroundAudio.paused) {


          // Funkcja do asynchronicznego ustawiania atrybutu src elementu audio
          async function loadAudio() {
            const audioUrl =  'assets/audio/tapes.mp3'; // Wprowadź właściwy link do pliku audio

            console.log('async')
            
            try {
              // Pobranie danych audio za pomocą Fetch lub innej metody

              console.log('async2')

              const response = await fetch(audioUrl);
              const audioBlob = await response.blob();

              console.log('async3')
              
              // Tworzenie URL obiektu blob do ustawienia jako src
              const blobUrl = URL.createObjectURL(audioBlob);
              
              // Ustawienie src dla elementu audio
              backgroundAudio.src = blobUrl;
              backgroundAudio.play();



  

            } catch (error) {
              console.error('Błąd podczas ładowania audio:', error);
            }
          }
          
  loadAudio()

  const timeline3 = gsap
  .timeline()
  .to("#note1", {
    duration: 0.5,
    opacity: 1,
  })
  .to(
    "#note2",
    {
      duration: 0.5,
      opacity: 1,
    },
    "<",
  );

  } else {

    console.log('played')

    const timeline4 = gsap
      .timeline()
      .to("#note1", {
        duration: 0.5,
        opacity: 0,
        onStart: function () {
          backgroundAudio.pause();
        },
      })
      .to(
        "#note2",
        {
          duration: 0.5,
          opacity: 0,
        },
        "<",
      );
  }
});

const timeline2 = gsap
  .timeline()
  .to("#note1", {
    duration: 4,
    repeat: -1,
    x: 45,
    y: -35,
    width: 12,
  })
  .to(
    "#note2",
    {
      duration: 4,
      repeat: -1,
      x: 25,
      y: -35,
      width: 12,
    },
    ">",
  );
