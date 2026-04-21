import { useState } from "react";
import styles from "./style/catalog.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";

const Catalog = () => {
  const totalImages = 7;
  const images = Array.from({ length: totalImages }, (_, i) => i + 1);
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const allLoaded = loadedCount === totalImages;

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.productGrid}>
        {images.map((num) => (
          <div key={num} className={styles.productCard}>
            {!allLoaded && <div className={styles.skeletonItem} />}
            <div
              className={styles.imageWrapper}
              style={{ display: allLoaded ? "block" : "none" }}
            >
              <img
                src={`/assets/${num}.svg`}
                alt={`Vela Bumy diseño ${num}`}
                className={styles.svgImage}
                onLoad={handleImageLoad}
              />
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/573202781173?text=Hola%2C%20buen%20día.%20Estoy%20interesado%20en%20las%20velas%20Bummy.%20¿Me%20comparten%20precios%20y%20disponibilidad%3F%20Gracias."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.containerButtonW}
      >
        <IoLogoWhatsapp className={styles.was} />
      </a>
    </section>
  );
};

export default Catalog;
