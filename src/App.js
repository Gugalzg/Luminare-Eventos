import './App.css';

function App() {
  return (
    <div className="App">
      {/* Particles Background */}
      <div className="particles-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Header */}
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

      {/* Hero Section */}
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
            Com planejamento e execução, cuidamos de cada detalhe para 
            que seu evento seja perfeito.
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
            <div className="hero-logo">
              <img src="/logo-luminare.png" alt="Luminare Eventos" className="hero-logo-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="servicos">
        <div className="section-bg">
          <div className="wave-1"></div>
          <div className="wave-2"></div>
        </div>
        
        <h2>
          <span className="section-title">Nossos Serviços</span>
          <span className="section-subtitle">Experiências únicas para cada ocasião</span>
        </h2>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎉</div>
            <h3>Festas Corporativas</h3>
            <p>Eventos empresariais únicos que fortalecem sua marca e conectam sua equipe.</p>
            <div className="card-glow"></div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💍</div>
            <h3>Casamentos</h3>
            <p>Celebrações de amor personalizadas, cuidando de cada detalhe do seu dia especial.</p>
            <div className="card-glow"></div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🎂</div>
            <h3>Aniversários</h3>
            <p>Festas de aniversário memoráveis para todas as idades e gostos.</p>
            <div className="card-glow"></div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Formaturas</h3>
            <p>Cerimônias de formatura elegantes para celebrar suas conquistas.</p>
            <div className="card-glow"></div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Eventos Empresariais</h3>
            <p>Conferências, seminários e workshops profissionais de alto nível.</p>
            <div className="card-glow"></div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🎪</div>
            <h3>Eventos Temáticos</h3>
            <p>Experiências imersivas com temas personalizados e decoração exclusiva.</p>
            <div className="card-glow"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="sobre">
        <div className="about-content">
          <h2>Sobre a Luminare</h2>
          <p>
            Há mais de 10 anos no mercado de eventos, a Luminare se dedica a criar 
            experiências únicas e memoráveis. Nossa equipe especializada trabalha 
            incansavelmente para transformar sua visão em realidade.
          </p>
          <p>
            Acreditamos que cada evento é único e merece atenção especial. Por isso, 
            oferecemos um atendimento personalizado, cuidando de todos os detalhes 
            para garantir que seu evento seja perfeito.
          </p>
          <p>
            Da concepção à execução, estamos ao seu lado em cada etapa, garantindo 
            que tudo saia exatamente como você sonhou.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contato">
        <div className="contact-content">
          <h2>Entre em Contato</h2>
          <p>Pronto para criar seu evento dos sonhos? Vamos conversar!</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Telefone</h3>
              <p>(11) 9999-9999</p>
            </div>
            
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>contato@luminare.com.br</p>
            </div>
            
            <div className="contact-item">
              <h3>📍 Endereço</h3>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
