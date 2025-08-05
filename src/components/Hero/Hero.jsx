import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-effects">
        <div className="glow-orb orb1"></div>
        <div className="glow-orb orb2"></div>
        <div className="glow-orb orb3"></div>
      </div>
      <div className="hero-content">
        <h1>
          Criamos <span className="highlight">experiências únicas</span> para seus eventos especiais
        </h1>
        <p>
          Na Luminare Eventos, transformamos suas ideias em momentos inesquecíveis. 
          Com planejamento e execução, cuidamos de cada detalhe para que seu evento seja perfeito.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">
            <span>Nossos Serviços</span>
          </button>
          <button className="secondary-btn">
            <span>Fale Conosco</span>
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="logo-container">
          <div className="floating-shape shape1"></div>
          <div className="floating-shape shape2"></div>
          <div className="floating-shape shape3"></div>
          <div className="floating-shape shape4"></div>
          <div className="floating-shape shape5"></div>
          <div className="hero-logo">
            <img src="/logo-luminare.png" alt="Luminare Eventos" className="hero-logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;