const Footer = () => {
  return (
    <footer>
      <div className="soc">
              <a target="_blank" href="https://www.linkedin.com/in/logan-bovet/">
          <span className="ion ion-social-linkedin" />
        </a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Logan BOVET. Tous droits réservés.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;