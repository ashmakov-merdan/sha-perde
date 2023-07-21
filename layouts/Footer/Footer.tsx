import "@/styles/footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="copyright">All rights reserved © {year} - Şa Perde. Все права защищены.</p>
    </footer>
  )
};

export default Footer;