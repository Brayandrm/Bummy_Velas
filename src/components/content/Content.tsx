import { AiFillTikTok } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./style/content.module.scss";

const Content = () => {
  return (
    <main className={styles.content}>
      <div className={styles.linksContainer}>
        <a
          href="https://wa.me/573202781173?text=Hola%20quiero%20comprar"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCard}
        >
          Compras por WhatsApp
        </a>
        <a href="#" className={styles.linkCard}>
          Catalogo
        </a>
      </div>

      <section className={styles.logosContainer}>
        <a
          href="https://instagram.com/Bummy_Velas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill className={styles.icon} />
        </a>
        <a
          href="https://www.tiktok.com/@Bummy_Velas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTikTok className={styles.icon} />
        </a>
      </section>
    </main>
  );
};

export default Content;
