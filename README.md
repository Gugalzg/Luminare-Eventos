# 🌟 Luminare Eventos

**Criamos experiências únicas e memoráveis para seus eventos especiais**

A Luminare Eventos é uma empresa especializada em planejamento e execução de eventos únicos e personalizados. Com mais de 10 anos de experiência no mercado, transformamos suas ideias em momentos inesquecíveis.

## 🎯 Sobre o Projeto

Este é o website oficial da Luminare Eventos, desenvolvido em React para apresentar nossos serviços e facilitar o contato com nossos clientes. O site apresenta um design moderno e elegante que reflete a qualidade dos nossos serviços.

### ✨ Características

- **Design Responsivo**: Interface adaptável para todos os dispositivos
- **Animações Fluidas**: Experiência visual envolvente com animações CSS avançadas
- **Navegação Intuitiva**: Menu fixo com ancoragem suave entre seções
- **Visual Profissional**: Gradientes e efeitos visuais que transmitem sofisticação
- **Otimizado para Performance**: Carregamento rápido e experiência fluida
- **Componentes Modulares**: Arquitetura React organizada em componentes reutilizáveis
- **Efeitos Interativos**: Hover effects, partículas flutuantes e elementos glassmorphism
- **Design System Consistente**: Paleta de cores coesa e tipografia moderna

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca JavaScript para interfaces de usuário
- **CSS3** - Estilização avançada com animações e gradientes
- **Google Fonts (Poppins)** - Tipografia moderna e elegante
- **Create React App** - Configuração inicial do projeto

## 🎨 Serviços Oferecidos

### 🎉 Festas Corporativas
Eventos empresariais únicos que fortalecem sua marca e conectam sua equipe.

### 💍 Casamentos
Celebrações de amor personalizadas, cuidando de cada detalhe do seu dia especial.

### 🎂 Aniversários
Festas de aniversário memoráveis para todas as idades e gostos.

### 🎓 Formaturas
Cerimônias de formatura elegantes para celebrar suas conquistas.

### 🏢 Eventos Empresariais
Conferências, seminários e workshops profissionais de alto nível.

### 🎪 Eventos Temáticos
Experiências imersivas com temas personalizados e decoração exclusiva.

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Gugalzg/Luminare-Eventos.git
cd luminare
```

2. Instale as dependências:
```bash
npm install
```

### Comandos Disponíveis

#### `npm start`
Executa o aplicativo em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada automaticamente quando você fizer alterações.\
Você também verá erros de lint no console.

#### `npm test`
Inicia o executor de testes no modo interativo.\
Veja mais informações sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests).

#### `npm run build`
Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem hashes.\
Seu aplicativo está pronto para ser implantado!

#### `npm run eject`
**Nota: esta é uma operação unidirecional. Uma vez que você `eject`, não pode voltar atrás!**

Se você não estiver satisfeito com as escolhas de ferramentas de compilação e configuração, pode `eject` a qualquer momento.

## 📁 Estrutura do Projeto

```
luminare/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo-luminare.png        # Logo principal da Luminare
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css                  # Estilos principais e animações globais
│   ├── App.js                   # Componente principal da aplicação
│   ├── App.test.js              # Testes do componente App
│   ├── index.css                # Estilos globais e reset CSS
│   ├── index.js                 # Ponto de entrada da aplicação
│   ├── reportWebVitals.js       # Métricas de performance
│   ├── setupTests.js            # Configuração dos testes
│   └── components/              # Componentes React organizados por funcionalidade
│       ├── About/
│       │   ├── About.jsx        # Seção "Sobre a Luminare"
│       │   └── About.css        # Estilos com gradientes e animações
│       ├── Background/
│       │   ├── Background.jsx   # Componente de partículas flutuantes
│       │   └── Background.css   # Animações de partículas
│       ├── Contact/
│       │   ├── Contact.jsx      # Seção de contato com informações
│       │   └── Contact.css      # Cards de contato com efeitos hover
│       ├── Header/
│       │   ├── Header.jsx       # Navegação fixa com logo e menu
│       │   └── Header.css       # Header glassmorphism e efeitos
│       ├── Hero/
│       │   ├── Hero.jsx         # Seção principal/banner do site
│       │   └── Hero.css         # Animações complexas e layout responsivo
│       └── Services/
│           ├── Services.jsx     # Grid de serviços oferecidos
│           └── Services.css     # Cards interativos com hover effects
├── package.json
└── README.md
```

## 🎨 Detalhes Técnicos

### Componentes Principais

#### 🏠 **Header Component**
- **Funcionalidade**: Navegação fixa no topo da página
- **Características**: Efeito glassmorphism, logo responsivo, menu de navegação
- **Animações**: Hover effects nos links, transformações suaves
- **Responsividade**: Menu collapse em dispositivos móveis

#### 🌟 **Hero Component** 
- **Funcionalidade**: Seção principal/banner do site
- **Características**: Layout em duas colunas, call-to-actions, elementos flutuantes
- **Animações**: Partículas flutuantes, efeitos de glow, animações de entrada
- **Elementos**: Logo principal, formas geométricas animadas

#### ⚡ **Services Component**
- **Funcionalidade**: Apresentação dos serviços em grid
- **Características**: Cards interativos com ícones, descrições detalhadas
- **Animações**: Hover effects 3D, transformações de escala, efeitos de glow
- **Layout**: Grid responsivo adaptável

#### 📖 **About Component**
- **Funcionalidade**: Informações sobre a empresa
- **Características**: Design dark theme, gradientes animados
- **Animações**: Efeitos de breathing, text glow, fade-in sequencial
- **Conteúdo**: História da empresa, valores, experiência

#### 📞 **Contact Component**
- **Funcionalidade**: Informações de contato
- **Características**: Cards glassmorphism, informações estruturadas
- **Animações**: Aurora effects, shimmer transitions, hover interactions
- **Layout**: Grid de contatos com informações essenciais

#### 🌌 **Background Component**
- **Funcionalidade**: Partículas de fundo animadas
- **Características**: Elementos decorativos flutuantes
- **Animações**: Movimento constante, efeitos de profundidade
- **Performance**: Otimizado para não impactar performance

### Paleta de Cores Detalhada

- **Roxo Principal**: `#8B5FBF` - Cor primária da marca
- **Dourado**: `#E8B86D` - Cor de destaque e elegância
- **Gradientes**: Combinações suaves entre roxo e dourado
- **Neutros**: Tons de branco e cinza para contraste

## 📱 Contato

- **Telefone**: (11) 9999-9999
- **Email**: contato@luminare.com.br
- **Localização**: São Paulo, SP

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🌐 Deploy

O projeto pode ser facilmente implantado em plataformas como:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Para deploy, execute `npm run build` e carregue a pasta `build` para sua plataforma de hospedagem preferida.

---

**Desenvolvido com ❤️ pela equipe Luminare Eventos**

*Transformando sonhos em realidade, um evento por vez.*
