import './Contact.css';
import { openWhatsApp } from '../../utils/whatsapp';

function Contact() {
  const handlePhoneClick = () => {
    const message = `Olá! Vi o número da Luminare Eventos no site e gostaria de conversar sobre meus próximos eventos.

Poderia me ajudar com informações sobre os serviços?

Obrigado!`;
    openWhatsApp(message, 'contact');
  };

  const handleEmailClick = () => {
    const email = 'contato.luminareeventos@gmail.com';
    const subject = 'Interesse nos serviços - Luminare Eventos';
    const body = 'Olá! Gostaria de mais informações sobre os serviços da Luminare Eventos para meu próximo evento.';
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  const handleLocationClick = () => {
    const address = 'Medianeira, PR';
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="contact" id="contato">
      <div className="contact-content">
        <h2>Entre em Contato</h2>
        <p>Pronto para criar seu evento dos sonhos? Vamos conversar!</p>
        <div className="contact-info">
          <div className="contact-item clickable" onClick={handlePhoneClick}>
            <h3>📞 Telefone</h3>
            <p>(45) 99828-4568</p>
            <span className="click-hint">Clique para conversar no WhatsApp</span>
          </div>
          <div className="contact-item clickable" onClick={handleEmailClick}>
            <h3>📧 Email</h3>
            <p>contato.luminareeventos@gmail.com</p>
            <span className="click-hint">Clique para enviar um email</span>
          </div>
          <div className="contact-item clickable" onClick={handleLocationClick}>
            <h3>📍 Endereço</h3>
            <p>Medianeira, PR</p>
            <span className="click-hint">Clique para ver no mapa</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
