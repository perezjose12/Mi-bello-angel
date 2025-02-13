import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MessageWithAnimation from "./MessageWithAnimation";
import GradientButton from "./GradientButton";
import { iconVariants, messageVariants, screenVariants } from "../config/animationConfig";

interface ButtonProps {
    text: string;
    className: string;
    onClick?: () => void;
}

interface ScreenProps {
    screenNumber: number;
    message: string;
    buttons: ButtonProps[];
    isVisible: boolean;
    onButtonClick?: (button: ButtonProps) => void;
    iconSrc: string;
}

const Screen: React.FC<ScreenProps> = ({ screenNumber, message, buttons, isVisible, onButtonClick = () => { }, iconSrc }) => {
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        setShowButtons(false);
    }, [screenNumber]);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key={screenNumber} // 🔥 Asegura que se reconstruya correctamente
                    className={`screen screen-${screenNumber}`}
                    variants={screenVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit" // 🔹 Ahora sí ejecuta la animación de salida
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ display: "block", position: "relative", overflow: "hidden" }}
                >
                    {/* Mensaje con animación */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`message-${screenNumber}`} // 🔥 Clave única para forzar desmontaje y remontaje
                            className="message-container"
                            variants={messageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <MessageWithAnimation
                                message={message}
                                onAnimationComplete={() => setShowButtons(true)}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Ícono */}
                    {iconSrc && (
                        <motion.img
                            key={`icon-${screenNumber}`}
                            src={iconSrc}
                            alt="Heart Icon"
                            style={{ width: "80px", filter: "drop-shadow(0 0 5px rgba(255, 0, 0, 0.8))" }}
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit" // 🔹 El icono también desaparece con animación
                            transition={iconVariants.transition}
                        />
                    )}

                    {/* Botones */}
                    <AnimatePresence mode="wait">
                        <div className="buttons-container">
                            {buttons.map((button, index) => (
                                <motion.div
                                    key={`button-${screenNumber}-${index}`}
                                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                    animate={{
                                        opacity: showButtons ? 1 : 0,
                                        y: showButtons ? 0 : 30,
                                        scale: showButtons ? 1 : 0.8,
                                        transition: {
                                            opacity: { duration: 0.5, ease: "easeOut" },
                                            y: { type: "spring", stiffness: 120, damping: 10, delay: index * 0.1 },
                                            scale: { duration: 0.3, ease: "easeOut" },
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -20,
                                        scale: 0.8,
                                        transition: { duration: 0.3, ease: "easeInOut" },
                                    }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                >
                                    <GradientButton
                                        index={index}
                                        {...button}
                                        onClick={() => {
                                            if (button.onClick) {
                                                button.onClick();
                                            } else {
                                                onButtonClick(button);
                                            }
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </AnimatePresence>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Screen;
