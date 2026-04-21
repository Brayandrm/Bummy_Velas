import { useState } from "react";
import styles from "./style/catalog.module.scss";

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
    </section>
  );
};

export default Catalog;