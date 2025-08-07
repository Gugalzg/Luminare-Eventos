import "./Services.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Services() {
  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const [selectedService, setSelectedService] =
    useState(null);

  const services = [
    {
      icon: "🎪",
      title: "Pegue e Monte",
      desc: "Decorações personalizadas e práticas que você pode montar facilmente em casa, com tudo incluso para criar um ambiente incrível a partir de R$130,00.",
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
          pricing:
            "R$ 130,00 - Ideal para festas médias até 15 pessoas",
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
          pricing:
            "R$ 205,00 - Perfeito para festas médias até 30 pessoas",
        },
        /* 
        gold: {
          name: "Pacote Gold",
          features: [
            "Painel de fundo luxo (2,5m x 2,5m)",
            "Kit completo com 60+ balões variados",
            "Toalha, guardanapos e jogos americanos",
            "Múltiplos arranjos decorativos",
            "Kit utensílios premium coordenados",
            "Elementos decorativos extras (flores, fitas)",
            "Personalização com nome/idade",
            "Suporte VIP via WhatsApp",
            "Entrega expressa em 24h",
            "Montagem opcional (+R$50)",
          ],
          pricing:
            "R$ 350,00 - Experiência completa para festas grandes até 50 pessoas",
        },
        */
      },
      features: [
        "Kit completo de decoração temática",
        "Instruções detalhadas de montagem",
        "Material de qualidade premium",
        "Flexibilidade para montar no seu tempo",
        "Suporte via WhatsApp durante a montagem",
        "Possibilidade de personalização das cores",
      ],
      pricing:
        "A partir de R$ 130,00 - Valor varia conforme pacote escolhido",
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
        "Templates para Stories animados",
        "GIFs personalizados para Stories",
        "Hashtags personalizadas criativas",
        "Manual de uso dos filtros",
      ],
      pricing:
        "A partir de R$ 80,00 - Pacotes com múltiplos filtros disponíveis",
    },
    {
      icon: "🎂",
      title: "Kit Mêsversário",
      desc: "Kits completos para celebrar cada mês do seu bebê com decoração temática, painel e acessórios únicos.",
      fullDescription:
        "Celebre cada mês de vida do seu bebê com nossos kits especiais de mêsversário. Cada kit é cuidadosamente preparado com decoração temática, painel personalizado e acessórios fotográficos para criar registros únicos de cada fase do crescimento.",
      features: [
        "Painel personalizado com nome e idade",
        "Balões temáticos de qualidade",
        "Acessórios para sessão de fotos",
        "Plaquinhas com marcos do desenvolvimento",
        "Decoração de mesa temática",
        "Kit pode ser reutilizado com ajustes",
      ],
      pricing:
        "A partir de R$ 120,00 - Planos mensais com desconto disponíveis",
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
      pricing:
        "A partir de R$ 45,00 - Valores variam conforme tamanho e personalização",
    },
    {
      icon: "🎉",
      title: "Mini Festa",
      desc: "Decoração completa para mesa de festa com arranjos, toalhas temáticas e acessórios coordenados.",
      fullDescription:
        'Transforme sua mesa em um verdadeiro cenário de festa! Nosso serviço de "Mini Festa" inclui toda a decoração necessária para criar uma mesa temática incrível, desde toalhas e arranjos até utensílios coordenados e elementos decorativos únicos.',
      features: [
        "Arco Redondo Pequeno",
        "Mni Arco de Balões (Máximo 2 cores)",
        "Bandejas",
        "Vasos com Arbusto",
        "Capa Temática",
      ],
      pricing:
        "A partir de R$ 50,00 - Ideal para pequenas celebrações até 10 pessoas",
    },
    {
      icon: "🎁",
      title: "Lembrancinhas",
      desc: "Lembrancinhas personalizadas e criativas que seus convidados vão guardar com carinho para sempre.",
      fullDescription:
        "Crie lembranças duradouras com nossas lembrancinhas exclusivas e personalizadas. Desenvolvemos peças únicas que refletem o tema e a personalidade do seu evento, garantindo que seus convidados levem para casa uma lembrança especial e marcante.",
      features: [
        "Design exclusivo e personalizado",
        "Materiais de alta qualidade",
        "Opções para todos os orçamentos",
        "Embalagens temáticas incluídas",
        "Produção artesanal cuidadosa",
        "Personalização com nomes dos convidados",
      ],
      pricing:
        "A partir de R$ 8,00 por unidade - Descontos para grandes quantidades",
    },
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
    <section className="services" id="servicos">
      <div className="section-bg">
        <div className="wave-1"></div>
        <div className="wave-2"></div>
      </div>
      <h2>
        <span className="section-title">
          Nossos Serviços
        </span>
        <span className="section-subtitle">
          Experiências únicas para cada ocasião
        </span>
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
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
