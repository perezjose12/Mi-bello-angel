import { motion } from "framer-motion";
import { useState } from "react";
import { appConfig } from "../config/config";
import { getButtonVariants } from "../config/animationConfig";

interface ButtonProps {
    index: number;
    text: string;
    className: string;
    onClick?: () => void;
}

const theme = appConfig.theme;

const themeStyles: Record<string, { gradient: string }> = {
    roses: {
        gradient: "linear-gradient(135deg, #a30808, #ff4d4d)", // Rojo oscuro intenso a rojo vibrante
    },
    tulips: {
        gradient: "linear-gradient(135deg, #9b59b6, #e91e63)",
    },
    sunflowers: {
        gradient: "linear-gradient(135deg, #f39c12, #ffeb3b)", // Naranja cálido a amarillo brillante
    },
    lilies: {
        gradient: "linear-gradient(135deg, #2980b9, rgb(118, 203, 252))", // Azul profundo a azul brillante
    },
};

const emojiGifs: Record<string, string> = {
    "[inlove]": "/inlove.gif",
    "[sun]": "/sun.gif",
    "[angry]": "/angry.gif",
    "[hands]": "/hands.gif",
    "[brokenheart]": "/brokenheart.gif",
    "[cry]": "/cry.gif",
    "[grimacing]": "/grimacing.gif",
    "[heart]": "/heart.gif",
    "[hugface]": "/hugface.gif",
    "[laugh]": "/laugh.gif",
    "[rage]": "/rage.gif",
    "[smile]": "/smile.gif",
};

const GradientButton: React.FC<ButtonProps> = ({ index, text, className, onClick }) => {
    const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
    const { gradient } = themeStyles[theme];

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target as HTMLButtonElement;

        const x = (offsetX / clientWidth) * 100;
        const y = (offsetY / clientHeight) * 100;

        setBackgroundPosition(`${x}% ${y}%`);
    };

    // Separar el texto y los emojis en GIF
    const elements = text.split(/(\[.*?\])/g);

    return (
        <motion.button
            className={`${className} ${theme}-btn flex items-center justify-center gap-1`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            whileTap={appConfig.animationEnabled ? { scale: 0.8 } : undefined}
            style={{
                background: gradient,
                backgroundSize: "200% 200%",
                backgroundPosition,
                border: `2px solid white`,
            }}
            variants={getButtonVariants(index)}
            initial="initial"
            animate={appConfig.animationEnabled ? "jumping" : undefined}
            whileHover={appConfig.animationEnabled ? "hovered" : undefined}
        >
            {elements.map((part, idx) =>
                emojiGifs[part] ? (
                    <motion.img
                        key={idx}
                        src={emojiGifs[part]}
                        alt="Emoji"

                        className="gif-emoji inline-block"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                    />
                ) : (
                    <motion.span
                        key={idx}
                        className="animated-text"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.3, ease: "easeOut" }}
                    >
                        {part}
                    </motion.span>
                )
            )}
        </motion.button>
    );
};

export default GradientButton;
