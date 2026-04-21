import styles from "./style/catalog.module.scss";

const Catalog = () => {
  const totalImages = 7;
  const images = Array.from({ length: totalImages }, (_, i) => i + 1);

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.productGrid}>
        {images.map((num) => (
          <div key={num} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <img 
                src={`/assets/${num}.svg`} 
                alt={`Vela Bumy diseño ${num}`} 
                className={styles.svgImage}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;