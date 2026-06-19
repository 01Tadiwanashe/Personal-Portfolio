particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: ["#FF69B4", "#FFFFFF", "#FF1493", "#E040FB"] },
    shape: { type: "circle" },
    opacity: {
      value: 1, random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.5, sync: false }
    },
    size: {
      value: 8, random: true,
      anim: { enable: true, speed: 3, size_min: 4, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#FF69B4",
      opacity: 0.6,
      width: 1.5
    },
    move: {
      enable: true, speed: 2, direction: "none",
      random: true, straight: false, out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      bubble: { distance: 200, size: 16, duration: 2, opacity: 1 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
