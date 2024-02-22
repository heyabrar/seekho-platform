import "../../styles/contact.css";
import WhatsApp from "../Icons/WhatsApp";

const Contact = () => {
  return (
    <div className="contact-container">
      <p>Aapko koi sawaal hai?</p>
      <textarea placeholder="Humse poochen" className="text-area" />
      <button className="send-cta">
        <WhatsApp /> Bhejein
      </button>
      <p className="email">
        Ya fir humein email karein{" "}
        <span style={{ color: " #ffcc11" }}>queries@seekhoapp.com</span>
      </p>
    </div>
  );
};

export default Contact;
