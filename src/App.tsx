import React, { useEffect, useState } from "react";
import Screen from "./components/Screen";
import "./App.css";
import { screens } from "./config/data";
import { appConfig } from "./config/config";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"
import snow from "./config/particles/snow";
import fireworks from "./config/particles/fireworks";
import { AnimatePresence, motion } from "framer-motion";
import { IKImage, IKContext } from "imagekitio-react";
import { ISourceOptions } from "@tsparticles/engine";
import { Helmet } from "react-helmet-async";
import { locales } from "./config/locales";

const IMAGEKIT_URL = "https://ik.imagekit.io/fclgxutpe/";

const ParticlesComponent = React.memo(({ options }: { options: ISourceOptions }) => (
  <Particles id="tsparticles" options={options} />
));
const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [backgrounds, setBackgrounds] = useState<string[]>([]);
  const [particlesOptions, setParticlesOptions] = useState(snow);

  useEffect(() => {
    const currentScreenData = screens.find(screen => screen.screenNumber === currentScreen);
    if (currentScreenData) {
      setBackgrounds(prev => [...prev, currentScreenData.background].slice(-2));
    }
  }, [currentScreen]);

  useEffect(() => {
    switch (currentScreen) {
      case 4:
        setParticlesOptions(fireworks);
        break;
      default:
        setParticlesOptions(snow);
    }
  }, [currentScreen]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      console.log("Motor de partículas inicializado");
    });
  }, []);
  
  const audio = document.getElementById('myAudio') as HTMLAudioElement;
  let audioPlayed = false;
  function playAudioOnce() {
    if (!audioPlayed) {
      audio.play();
      audioPlayed = true;
    }
  }
  return (
    <>
      <Helmet>
        <title>{locales[appConfig.language].title}</title>
      </Helmet>
      <div className="app">

        {appConfig.animationEnabled && <ParticlesComponent options={particlesOptions} />}
        <audio id="myAudio" src="song.mp3" />
        <div className="background-container">
          <AnimatePresence>
            {backgrounds.map((bg, index) => (
              <motion.div
                key={`${bg}-${index}`} // 🔥 Clave única para evitar errores
                className="background"
                initial={{ opacity: 0, scale: 1.2 }} // 🔹 Aparece con zoom más grande
                animate={{ opacity: 1, scale: 1 }} // 🔹 Se acerca y aparece
                exit={{ opacity: 0, scale: 1.1 }} // 🔹 Se acerca un poco más y se desvanece
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                }}
              >
                <IKContext publicKey="public_WTMMfzmwSwX3DAucImYCcsvaJbQ=" urlEndpoint={IMAGEKIT_URL}>
                  <IKImage
                    path={bg}
                    lqip={{ active: true, quality: 20 }}
                    loading="lazy"
                    transformation={[{ width: "1920", height: "1080", quality: "90" }]}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </IKContext>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {screens.find(screen => screen.screenNumber === currentScreen) && (
          <Screen
            screenNumber={currentScreen}
            message={screens.find(screen => screen.screenNumber === currentScreen)?.message || ""}
            buttons={screens.find(screen => screen.screenNumber === currentScreen)?.buttons.map(button => ({
              ...button,
              onClick: () => {
                setCurrentScreen(button.nextScreen);
                playAudioOnce();
              },
            })) || []}
            isVisible={true}
            iconSrc={screens.find(screen => screen.screenNumber === currentScreen)?.iconSrc || ""}
          />
        )}

      </div></>
  );
};

export default App;
