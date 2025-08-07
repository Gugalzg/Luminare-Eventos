import './Header.css';
import { openWhatsApp } from '../../utils/whatsapp';

function Header() {
  const handleWhatsAppClick = () => {
    openWhatsApp('', 'header');
  };

  const handleNavClick = (e) => {
    // Navegação suave para seções
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 80;
        const offsetTop = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo-luminare.png" alt="Luminare Eventos" className="logo-img" />
      </div>
      
      <nav className="nav">
        <a href="#home" onClick={handleNavClick}>Início</a>
        <a href="#servicos" onClick={handleNavClick}>Serviços</a>
        <a href="#sobre" onClick={handleNavClick}>Sobre</a>
        <a href="#contato" onClick={handleNavClick}>Contato</a>
      </nav>
      
      <button className="cta-button" onClick={handleWhatsAppClick}>
        <span>Solicitar Orçamento</span>
      </button>
    </header>
  );
}

export default Header;