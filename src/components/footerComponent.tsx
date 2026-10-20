import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>My Website</h3>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <p>
          © {new Date().getFullYear()} My Website.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;