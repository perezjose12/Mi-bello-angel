import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IKImage, IKContext } from "imagekitio-react";

const IMAGEKIT_URL = "https://ik.imagekit.io/whmaz07lo";

const BackgroundFade: React.FC<{ imagePath: string }> = ({ imagePath }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    useEffect(() => {
        setImageLoaded(false); // Resetear el estado antes de cambiar la imagen
        const img = new Image();
        img.src = `${IMAGEKIT_URL}${imagePath}`;
        img.onload = () => {
            setCurrentImage(imagePath);
            setImageLoaded(true);
        };
    }, [imagePath]);

    return (
        <IKContext publicKey="public_tSlmzVaaNOyClK/ZLiFxRdk4uoA=" urlEndpoint={IMAGEKIT_URL}>
            <AnimatePresence>
                {imageLoaded && currentImage && (
                    <motion.div
                        key={currentImage}
                        className="background"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: -1,
                        }}
                    >
                        <IKImage
                            path={currentImage}
                            lqip={{ active: true, quality: 20 }} // Carga una imagen borrosa primero
                            loading="lazy"
                            transformation={[{ width: "1920", height: "1080", quality: "90" }]} // Ajusta tamaño y calidad
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "top",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </IKContext>
    );
};

export default BackgroundFade;
