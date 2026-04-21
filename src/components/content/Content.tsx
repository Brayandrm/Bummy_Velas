import { AiFillTikTok } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

import styles from "./style/content.module.scss";
import { ROUTES_PATH } from "../routes/routesPath";

const Content = () => {
  const navigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <main className={styles.content}>
      <div className={styles.linksContainer}>
        <a
          href="https://wa.me/573202781173?text=Hola%2C%20buen%20día.%20Estoy%20interesado%20en%20las%20velas%20Bummy.%20¿Me%20comparten%20precios%20y%20disponibilidad%3F%20Gracias."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCard}
        >
          Compras por WhatsApp
        </a>
        <a 
          href={ROUTES_PATH.catalog} 
          className={styles.linkCard}
          onClick={(e) => navigate(e, ROUTES_PATH.catalog)}
        >
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