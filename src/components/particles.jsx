import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadHeartShape } from "@tsparticles/shape-heart";
const App = () => {
  const [init, setInit] = useState(false);
  
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadHeartShape(tsParticles)
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#171717",
        },
      },
      fpsLimit: 120,
      
      particles: {
        color: {
          value: [
            "#FFE5EC",
            "#FFC2D1",
            "#FFB3C6",
            "#FF8FAB",
            "#FB6F92",
            
          ]
        },
        move: {
          angle: {
            offset: 0,
            value: 15
          },
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out"
          },
          speed: 4
        },
        number: {
          value: 15
        },
        opacity: {
          value: 1
        },
        shape: {
          type: "heart"
        },
        size: {
          value: 20
        },
        roll: {
          darken: {
            enable: true,
            value: 30
          },
          enlighten: {
            enable: true,
            value: 30
          },
          enable: true,
          mode: "horizontal",
          speed: {
            min: 5,
            max: 15
          }
        },
        zIndex: {
          value: {
            min: 0,
            max: 100
          },
          opacityRate: 0,
          velocityRate: 2
        }
      },
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return <></>;
};

export default App;