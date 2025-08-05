import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-content">
        <h2>Entre em Contato</h2>
        <p>Pronto para criar seu evento dos sonhos? Vamos conversar!</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📞 Telefone</h3>
            <p>(45) 99828-4568</p>
          </div>
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>contato.luminareeventos@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>📍 Endereço</h3>
            <p>Medianeira, PR</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
