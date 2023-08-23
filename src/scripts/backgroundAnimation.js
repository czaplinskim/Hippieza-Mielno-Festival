// Background animation

const checkbox = document.getElementById("toggle_checkbox");
const element = document.querySelector("body");

function animateGradientColors() {
    const gradientColors = checkbox.checked
      ? 'linear-gradient(0, rgba(23, 173, 209, 1) 50%, rgba(0, 10, 120, 1) 100%)'
      : 'linear-gradient(0, rgba(241, 223, 102, 1) 50%, rgba(83, 155, 210, 1) 100%)';
  
    gsap.to("body", {
      background: gradientColors,
      duration: 1,
      ease: 'power1.inOut',
    });

  }

const animateGradientColorsListner = checkbox.addEventListener('change', animateGradientColors);

export default animateGradientColorsListner;

