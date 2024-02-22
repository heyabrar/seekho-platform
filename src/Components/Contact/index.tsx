import "../../styles/contact.css";
import WhatsApp from "../Icons/WhatsApp";

const Contact = () => {
  const mailAddress = "queries@seekhoapp.com";
  const phoneNumber = "7905985350";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="contact-container">
      <p>Aapko koi sawaal hai?</p>
      <textarea placeholder="Humse poochen" className="text-area" />
      <button className="send-cta" onClick={handleWhatsAppClick}>
        <WhatsApp /> Bhejein
      </button>
      <p className="email">
        Ya fir humein email karein{" "}
        <a
          href={`mailTo:${mailAddress}`}
          style={{ color: " #ffcc11" }}
          target="_blank"
          rel="noreferrer"
        >
          {mailAddress}
        </a>
      </p>
    </div>
  );
};

export default Contact;
