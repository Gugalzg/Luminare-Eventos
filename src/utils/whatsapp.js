// Função utilitária para abrir WhatsApp com mensagem personalizada
export const openWhatsApp = (message = '', context = 'geral') => {
  const phoneNumber = '5545998284568'; // Número no formato internacional (Brasil +55)
  
  let defaultMessage = '';
  
  switch (context) {
    case 'header':
      defaultMessage = `Olá! Gostaria de solicitar um orçamento para meu evento. 

Poderia me enviar mais informações sobre os serviços da Luminare Eventos?

Obrigado!`;
      break;
      
    case 'hero':
      defaultMessage = `Olá! Vim através do site da Luminare Eventos e gostaria de conversar sobre meus próximos eventos.

Poderia me passar mais informações sobre os serviços oferecidos?

Aguardo retorno!`;
      break;
      
    case 'contact':
      defaultMessage = `Olá! Gostaria de entrar em contato para saber mais sobre os serviços da Luminare Eventos.

Poderia me ajudar com informações sobre planejamento de eventos?

Obrigado!`;
      break;
      
    default:
      defaultMessage = message || `Olá! Gostaria de mais informações sobre os serviços da Luminare Eventos.

Obrigado!`;
  }
  
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Abre o WhatsApp em uma nova aba
  window.open(whatsappUrl, '_blank');
};
