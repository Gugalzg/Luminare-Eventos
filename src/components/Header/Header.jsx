import './Header.css';
import { openWhatsApp } from '../../utils/whatsapp';

function Header() {
  const handleWhatsAppClick = () => {
    openWhatsApp('', 'header');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo-luminare.png" alt="Luminare Eventos" className="logo-img" />
      </div>
      <nav className="nav">
        <a href="#home">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
      <button className="cta-button" onClick={handleWhatsAppClick}>
        <span>Solicitar Orçamento</span>
      </button>
    </header>
  );
}

export default Header;