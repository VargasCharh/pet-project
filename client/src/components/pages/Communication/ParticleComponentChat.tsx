import { useCallback } from "react";
import type { Container, Engine  } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App(): JSX.Element {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{position: 'absolute', zIndex: -10}}
      options={
        {
          name: "React Bubbles",
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "repulse",
                  },
                  onDiv: {
                      elementId: "repulse-div",
                      enable: false,
                      mode: "repulse",
                  },
                  onHover: {
                      enable: true,
                      mode: "bubble",
                  },
              },
              modes: {
                  bubble: {
                      distance: 250,
                      duration: 2,
                      opacity: 0,
                      size: 0,
                  },
                  connect: {
                      distance: 80,
                      links: {
                          opacity: 0.5,
                      },
                      radius: 60,
                  },
                  grab: {
                      distance: 180,
                      links: {
                          opacity: 0.35,
                      },
                  },
                  push: {
                      quantity: 4,
                  },
                  remove: {
                      quantity: 2,
                  },
                  repulse: {
                      distance: 200,
                      duration: 4,
                  },
                  slow: {
                      factor: 1,
                      radius: 0,
                  },
              },
          },
          particles: {
              color: {
                  value: "#FFF",
              },
              move: {
                  attract: {
                      enable: false,
                      rotate: {
                          x: 3000,
                          y: 3000,
                      },
                  },
                  collisions: true,
                  direction: "top",
                  enable: true,
                  speed: {
                      min: 0.1,
                      max: 1,
                  },
              },
              number: {
                  limit: -1,
                  value: 160,
              },
              opacity: {
                  animation: {
                      enable: true,
                      speed: 1,
                      sync: false,
                  },
                  value: {
                      min: 0.1,
                      max: 0.5,
                  },
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: {
                      min: 1,
                      max: 3,
                  },
              },
          },
          pauseOnBlur: true,
          background: {
              color: "#262626",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
          },
        }}
    />
  );
}

