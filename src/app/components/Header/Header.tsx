import BummyLogo from "../../../../public/Bummy_Circle.png";
import styles from "./style/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={BummyLogo} alt="Bummy" className={styles.logo} />
      </div>
      <h1 className={styles.title}>Bummy_Velas</h1>
      <p className={styles.bio}>✨Momentos únicos, detalles con Bummy🕯️!</p>
    </header>
  );
};

export default Header;
