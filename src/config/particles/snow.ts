import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  key: "snow",
  name: "Snow",
  particles: {
    number: {
      value: 1000,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: 10,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "bottom",
      straight: true,
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10,
    },
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
      opacityRate: 10,
      sizeRate: 10,
      velocityRate: 10,
    },
  },
};

export default options;
