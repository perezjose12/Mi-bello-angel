import { motion } from "framer-motion";

interface MessageWithAnimationProps {
    message: string;
    onAnimationComplete: () => void; // Recibe una función cuando termina la animación
}

const MessageWithAnimation: React.FC<MessageWithAnimationProps> = ({ message, onAnimationComplete }) => {
    const letters = message.split("");

    return (
        <motion.div
            className="message-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.h1>
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: index * 0.04,
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        onAnimationComplete={index === letters.length - 1 ? onAnimationComplete : undefined} // Se llama solo en la última letra
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.h1>
        </motion.div>
    );
};

export default MessageWithAnimation;
