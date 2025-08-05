import './Header.css';

function Header() {
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
      <button className="cta-button">
        <span>Solicitar Orçamento</span>
      </button>
    </header>
  );
}

export default Header;