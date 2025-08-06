import './Modal.css';
import { useEffect, useState } from 'react';
import { openWhatsApp } from '../../utils/whatsapp';

function Modal({ isOpen, onClose, service }) {
  const [activePackage, setActivePackage] = useState('start');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset para o pacote Start sempre que o modal abrir
      setActivePackage('start');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Event listener para fechar o modal com a tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    // Adiciona o event listener quando o modal está aberto
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    // Remove o event listener quando o modal fecha ou o componente desmonta
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleWhatsAppClick = () => {
    let message = '';
    
    if (service.title === 'Pegue e Monte' && service.packages) {
      const packageData = service.packages[activePackage];
      message = `Olá! Gostaria de solicitar um orçamento para o "${packageData.name}" do serviço Pegue e Monte.

${service.fullDescription}

Pacote escolhido: ${packageData.name}
${packageData.pricing}

Poderia me enviar mais informações sobre disponibilidade?

Obrigado!`;
    } else {
      message = `Olá! Gostaria de solicitar um orçamento para o serviço "${service.title}". 

${service.fullDescription}

Poderia me enviar mais informações sobre valores e disponibilidade?

Obrigado!`;
    }
    
    openWhatsApp(message, 'modal');
    
    // Fecha o modal após um pequeno delay
    setTimeout(() => {
      onClose();
    }, 500);
  };

  // Função para renderizar conteúdo baseado no pacote ativo
  const renderPackageContent = () => {
    if (service.title !== 'Pegue e Monte' || !service.packages) {
      return (
        <>
          <div className="modal-features">
            <h4>O que inclui:</h4>
            <ul className="features-list">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-pricing">
            <h4>Investimento:</h4>
            <p className="price-info">{service.pricing}</p>
          </div>
        </>
      );
    }

    const packageData = service.packages[activePackage];
    
    // Detalhes específicos para cada pacote
    const packageDetails = {
      start: {
        subtitle: "💡 Perfeito para começar com estilo",
        description: "Tudo que você precisa para uma festa encantadora e sem complicações.",
        colorClass: "package-name-start"
      },
      prime: {
        subtitle: "⭐ Nossa opção mais popular",
        description: "O equilíbrio perfeito entre qualidade, variedade e custo-benefício.",
        colorClass: "package-name-prime"
      },
      gold: {
        subtitle: "👑 A experiência premium completa",
        description: "Para quem não abre mão do luxo e quer impressionar os convidados.",
        colorClass: "package-name-gold"
      }
    };
    
    const currentDetails = packageDetails[activePackage];
    
    return (
      <>
        <div className="package-highlight">
          <span className="package-subtitle">{currentDetails.subtitle}</span>
          <p className="package-description">{currentDetails.description}</p>
        </div>
        
        <div className="modal-features">
          <h4>O que inclui no <span className={currentDetails.colorClass}>{packageData.name}</span>:</h4>
          <ul className="features-list">
            {packageData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="modal-pricing">
          <h4>Investimento:</h4>
          <p className="price-info">{packageData.pricing}</p>
        </div>
      </>
    );
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">
            <div className="modal-icon">{service.icon}</div>
            <span>{service.title}</span>
          </div>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">
            {service.fullDescription}
          </p>
          
          {/* Botões de pacotes para "Pegue e Monte" */}
          {service.title === 'Pegue e Monte' && service.packages && (
            <div className="package-buttons">
              <button 
                className={`package-btn package-start ${activePackage === 'start' ? 'active' : ''}`}
                onClick={() => setActivePackage('start')}
              >
                Pacote Start
              </button>
              <button 
                className={`package-btn package-prime ${activePackage === 'prime' ? 'active' : ''}`}
                onClick={() => setActivePackage('prime')}
              >
                Pacote Prime
              </button>
            </div>
          )}
          
          {renderPackageContent()}
        </div>
        
        <div className="modal-actions">
          <button className="modal-btn modal-btn-primary" onClick={handleWhatsAppClick}>
            {service.title === 'Pegue e Monte' && service.packages 
              ? `Quero o ${service.packages[activePackage].name}` 
              : 'Solicitar Orçamento'
            }
          </button>
          <button className="modal-btn modal-btn-secondary" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
