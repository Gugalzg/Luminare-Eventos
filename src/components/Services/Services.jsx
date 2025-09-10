import "./Services.css";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Efeito para mostrar todos os cards ao mesmo tempo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Remove o observer após ativar uma vez
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: "🧩",
      title: "Pegue e Monte",
      desc: "Decorações personalizadas e práticas que você pode montar facilmente em casa, com tudo inclusivo para criar um ambiente incrível.",
      fullDescription:
        'Nosso serviço "Pegue e Monte" é perfeito para quem deseja uma festa linda sem complicações. Você recebe todo o material decorativo organizado e com instruções detalhadas para montar sua decoração em casa. É prático, econômico e você tem total controle sobre o processo.',
      packages: {
        start: {
          name: "Pacote Start",
          features: [
            "Arco Redondo ou Romano",
            "Três Cilindros",
            "Pedestal de Balão (Máximo 2 cores)",
            "Bandejas",
            "Vasos com Arbusto",
            "Capa Temática",
          ],
          pricing: "R$150,00",
        },
        prime: {
          name: "Pacote Prime",
          features: [
            "Arco Redondo + Romano",
            "Três Cilindros",
            "Arco de Balões (Máximo 3 cores)",
            "Tapete",
            "Bandejas",
            "Vasos com Arbusto",
            "Capa Temática",
          ],
          pricing: "R$ 205,00",
        },
      },
      features: [
        "Kit completo de decoração temática",
        "Instruções detalhadas de montagem",
        "Material de qualidade premium",
        "Flexibilidade para montar no seu tempo",
        "Suporte via WhatsApp durante a montagem",
        "Possibilidade de personalização das cores",
      ],
      pricing: "A partir de R$150,00",
      priceNote: "Valor varia conforme pacote escolhido"
    },
      {
      icon: "🎉",
      title: "Mini Festa",
      desc: "Decoração completa para mesa de festa com arranjos, toalhas temáticas e acessórios coordenados.",
      fullDescription:
        'Transforme sua mesa em um verdadeiro cenário de festa! Nosso serviço de "Mini Festa" inclui toda a decoração necessária para criar uma mesa temática incrível, desde toalhas e arranjos até utensílios coordenados e elementos decorativos únicos.',
      features: [
        "Arco Redondo Pequeno",
        "Mini Arco de Balões (Máximo 2 cores)",
        "Bandejas",
        "Vasos com Arbusto",
        "Capa Temática",
      ],
      pricing: "A partir de R$50,00",
    },
    {
      icon: "🎂",
      title: "Kit Mêsversário",
      desc: "Kits completos para celebrar cada mês do seu bebê com decoração temática, painel e acessórios únicos.",
      fullDescription:
        "Celebre cada mês de vida do seu bebê com nossos kits especiais de mêsversário. Cada kit é cuidadosamente preparado com decoração temática, painel personalizado e acessórios fotográficos para criar registros únicos de cada fase do crescimento.",
      features: [
        "1x no mês (11 meses)",
        "Serviço 'Mini Festa'",
        "Arco Redondo Pequeno",
        "Mini arco de balões (Máximo 2 cores)",
        "Bandejas",
        "Vasos com Arbusto",
      ],
      pricing: 'De<span class="price-original">R$550,00</span> por <span class="price-current">R$440,00</span>',
    },
    {
      icon: "🎈",
      title: "Balão Bubble Personalizado",
      desc: "Balões transparentes personalizados com confetes, flores ou mensagens especiais para momentos únicos.",
      fullDescription:
        "Nossos balões bubble são a sensação do momento! Balões transparentes de alta qualidade preenchidos com confetes coloridos, flores secas, penas ou outros elementos decorativos. Perfeitos para pedidos de casamento, revelação de sexo, aniversários especiais e muito mais.",
      features: [
        'Balões bubble transparentes de 18" ou 24"',
        "Preenchimento personalizado (confetes, flores, etc.)",
        "Mensagens impressas ou adesivos personalizados",
        "Fitas e acabamentos de luxo",
        "Entrega cuidadosa para manter a qualidade",
        "Opções de cores e temas variados",
      ],
      // pricing removido - serviço sem valor definido
    },
  
        {
      icon: "📷",
      title: "Filtros para Instagram",
      desc: "Filtros personalizados e molduras temáticas para suas fotos ficarem ainda mais especiais e marcantes nas redes sociais.",
      fullDescription:
        "Crie memórias digitais únicas com nossos filtros e molduras personalizadas para Instagram. Desenvolvemos conteúdo visual exclusivo que combina perfeitamente com o tema do seu evento, garantindo fotos incríveis e engajamento nas redes sociais.",
      features: [
        "Filtros exclusivos com o tema do evento",
        "Molduras personalizadas com logos/nomes",
        "Manual de uso dos filtros",
      ],
      // pricing removido - serviço sem valor definido
    },
    {
      icon: "💌",
      title: "Convites Digitais",
      desc: "Convites digitais exclusivos, criativos e totalmente personalizados para transmitir a essência do seu evento e encantar seus convidados desde o primeiro contato.",
      fullDescription:
        "Crie convites digitais únicos que traduzem o estilo e o tema da sua celebração. Nossos designs exclusivos garantem um toque especial, despertando o entusiasmo dos convidados desde o primeiro contato.",
      features: [
        "Design exclusivo e personalizado",
        "Opções para todos os estilos e ocasiões",
        "Animações e elementos interativos opcionais",
        "Personalização com nomes e detalhes do evento",
        "Entrega rápida em formato digital"
      ],
      // pricing removido - serviço sem valor definido
    }

  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="services" id="servicos" ref={sectionRef}>
      <div className="section-bg">
        <div className="wave-1"></div>
        <div className="wave-2"></div>
      </div>
      <h2>
        <span className="section-title">Nossos Serviços</span>
        <span className="section-subtitle">Experiências únicas para cada ocasião</span>
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className={`service-card ${isVisible ? 'wave-visible' : ''}`}
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            
            {/* Preço destacado para Pegue e Monte e Mini Festa */}
            {(service.title === "Pegue e Monte" || service.title === "Mini Festa") && service.pricing && (
              <div className="service-price">
                <span className="service-price-value">{service.pricing}</span>
              </div>
            )}
            {service.title === "Kit Mêsversário" && service.pricing && (
              <div className="service-price">
                <span className="service-price-value">A partir de R$440,00</span>
              </div>
            )}
            <button
              className="service-btn"
              onClick={() => openModal(service)}
            >
              Ver detalhes
            </button>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </section>
  );
}

export default Services;
