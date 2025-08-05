import './Services.css';

function Services() {
  return (
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
        {[  
          { icon: '🎪', title: 'Pegue e Monte', desc: 'Decorações personalizadas e práticas que você pode montar facilmente em casa, com tudo incluso para criar um ambiente incrível.' },
          { icon: '📷', title: 'Filtros para Instagram', desc: 'Filtros personalizados e molduras temáticas para suas fotos ficarem ainda mais especiais e marcantes nas redes sociais.',},          
          { icon: '🎂', title: 'Kit Mêsversário', desc: 'Kits completos para celebrar cada mês do seu bebê com decoração temática, painel e acessórios únicos.' },
          { icon: '🎈', title: 'Balão Bubble Personalizado', desc: 'Balões transparentes personalizados com confetes, flores ou mensagens especiais para momentos únicos.' },
          { icon: '🎉', title: 'Festa na Mesa', desc: 'Decoração completa para mesa de festa com arranjos, toalhas temáticas e acessórios coordenados.' },
          { icon: '🎁', title: 'Lembrancinhas', desc: 'Lembrancinhas personalizadas e criativas que seus convidados vão guardar com carinho para sempre.' }
        ].map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;