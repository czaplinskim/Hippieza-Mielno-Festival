const backgroundAudio = document.getElementById("backgroundAudio");
const soundButton = document.getElementById("soundButton");

export const initializeSoundButton = () => {
  return soundButton.addEventListener("click", async function () {
    if (backgroundAudio.paused) {
      try {
        const audioUrl = "assets/audio/tapes.mp3";
        const response = await fetch(audioUrl);
        const audioBlob = await response.blob();
        const blobUrl = URL.createObjectURL(audioBlob);
        backgroundAudio.src = blobUrl;
        backgroundAudio.play();

        const notesTimeline = gsap.timeline();
        notesTimeline
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
            "<",
          );

        const fadeInTimeline = gsap.timeline();
        fadeInTimeline
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
      } catch (error) {
        console.error("Błąd podczas ładowania audio:", error);
      }
    } else {
      const fadeOutTimeline = gsap.timeline();
      fadeOutTimeline
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
};
