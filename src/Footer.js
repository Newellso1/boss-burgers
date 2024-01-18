import LogoBlack from "./Assets/Logo/Logo_black.png";

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <h5>Opening times</h5>
        <ul>
          <li>Monday: 1700h - 2200h</li>
          <li>Tuesday: 1700h - 2200h</li>
          <li>Wednesday: 1700h - 2200h</li>
          <li>Thursday: 1700h - 2200h</li>
          <li>Friday: 1700h - 2200h</li>
          <li>Saturday: 1700h - 2200h</li>
          <li>Sunday: 1700h - 2200h</li>
          <li>###########</li>
          <li>theboss@bossburgers.boss.uk</li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={LogoBlack} alt="Boss burgers logo" width="350em"></img>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9422.903830977677!2d-1.5675694!3d53.8121599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795eb2c275bf6f%3A0xdfb6d4a56a3c9fb0!2sBoss%20Burgers%20Hyde%20Park!5e0!3m2!1sen!2suk!4v1705586168030!5m2!1sen!2suk"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </footer>
  );
}
