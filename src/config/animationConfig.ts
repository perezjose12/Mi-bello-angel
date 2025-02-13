import { appConfig } from "./config";
import { Variants } from "framer-motion";

export const screenVariants: Variants = appConfig.animationEnabled
  ? {
      initial: { opacity: 0, scale: 0.9 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      },
      exit: {
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.6, ease: "easeInOut" },
      },
    }
  : {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 1 },
    };

export const messageVariants: Variants = appConfig.animationEnabled
  ? {
      initial: { opacity: 0, y: -20 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        },
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.4, ease: "easeIn" },
      },
    }
  : {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 1 },
    };

export const iconVariants = appConfig.animationEnabled
  ? {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: [1, 1.2, 1], opacity: [1, 1, 1] },
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    }
  : {
      initial: { scale: 1, opacity: 1 }, // 👈 Mantener valores válidos sin animación
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0 }, // 👈 Evitar `undefined`, usando una duración de 0
    };
export const getButtonVariants = (index: number): Variants =>
  appConfig.animationEnabled
    ? {
        initial: { y: 100 },
        jumping: {
          y: [0, -10, 0],
          transition: {
            duration: 0.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            delay: index * 0.2, // Agregamos el delay dinámico
          },
        },
        hovered: {
          scale: 1.1,
          y: 0,
          transition: { duration: 0.2 },
        },
      }
    : {};
