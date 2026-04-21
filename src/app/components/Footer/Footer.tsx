import styles from "./style/footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {currentYear} Bummy Velas. Todos los derechos reservados.
      </p>
      <p className={styles.location}>Bogotá, Colombia</p>
    </footer>
  );
};

export default Footer;
