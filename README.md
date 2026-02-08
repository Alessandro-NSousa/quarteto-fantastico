# Quarteto Fantástico - Landing Page

Landing page oficial da equipe de corrida **Quarteto Fantástico**.

![Logo Quarteto Fantástico](assets/images/logo.jpg)

## 🏃 Sobre o Projeto

Esta é uma landing page moderna, responsiva e performática desenvolvida para apresentar a equipe de corrida Quarteto Fantástico, seus integrantes, conquistas e próximos eventos.

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Estilização moderna e responsiva
- **JavaScript** - Interatividade e animações
- **Swiper.js** - Carrossel de imagens
- **Font Awesome** - Ícones

## 🎯 Características

✅ Design moderno e esportivo  
✅ Totalmente responsivo (mobile-first)  
✅ Carrossel de fotos interativo  
✅ Navegação suave entre seções  
✅ Animações e transições fluidas  
✅ Otimizado para performance  
✅ SEO básico implementado  
✅ Acessibilidade (WCAG)

## 📁 Estrutura do Projeto

```
landing-page/
├── index.html              # Página principal
├── css/
│   ├── input.css          # CSS de entrada do Tailwind
│   └── output.css         # CSS gerado (minificado)
├── js/
│   └── main.js            # JavaScript customizado
├── assets/
│   └── images/
│       └── logo.jpg       # Logo da equipe
├── package.json           # Dependências do projeto
├── tailwind.config.js     # Configuração do Tailwind
└── README.md              # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone ou baixe este repositório

2. Instale as dependências:
```bash
npm install
```

3. Gere o CSS do Tailwind:
```bash
npm run build
```

4. Abra o arquivo `index.html` em seu navegador

### Modo de Desenvolvimento

Para trabalhar no projeto com recompilação automática do CSS:

```bash
npm run dev
```

Este comando irá monitorar alterações nos arquivos e recompilar o CSS automaticamente.

## 🎨 Paleta de Cores

As cores seguem a identidade visual da logo oficial:

- **Verde Vibrante**: `#b4ff00` (quarteto-green)
- **Azul Escuro**: `#1a1a4d` (quarteto-blue)
- **Azul Escuro Claro**: `#2d2d6e` (quarteto-blue-light)

## 📝 Personalização

### Atualizar Informações da Equipe

Edite o arquivo `index.html` e modifique:

- **Seção Hero**: Frase de impacto e CTAs
- **Seção Sobre**: História e missão da equipe
- **Seção Equipe**: Informações dos atletas
- **Seção Eventos**: Histórico de participações
- **Footer**: Links de contato e redes sociais

### Adicionar Fotos ao Carrossel

1. Adicione suas imagens na pasta `assets/images/`
2. No `index.html`, localize a seção `#galeria`
3. Substitua os placeholders pelos elementos `<img>`:

```html
<div class="swiper-slide">
  <img src="assets/images/sua-foto.jpg" 
       alt="Descrição da foto" 
       class="w-full h-full object-cover"
       loading="lazy">
</div>
```

### Modificar Cores e Estilos

Edite o arquivo `tailwind.config.js` para personalizar:

- Cores
- Fontes
- Espaçamentos
- Breakpoints

Após modificar, execute `npm run build` para regenerar o CSS.

## 📱 Responsividade

A landing page foi desenvolvida com abordagem **mobile-first** e é totalmente responsiva:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts Disponíveis

- `npm run dev` - Modo desenvolvimento com watch
- `npm run build` - Gera CSS minificado para produção

## 🌐 Deploy

### Opções de Hospedagem

Esta landing page pode ser hospedada gratuitamente em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Render**

### Deploy no Vercel

1. Instale o Vercel CLI:
```bash
npm i -g vercel
```

2. Na pasta do projeto, execute:
```bash
vercel
```

3. Siga as instruções para fazer o deploy

## 📊 Performance

Para melhor performance:

- ✅ CSS minificado
- ✅ Lazy loading nas imagens
- ✅ Otimização de fontes
- ✅ Código JavaScript otimizado

## ♿ Acessibilidade

- Uso correto de tags semânticas HTML5
- Atributos `alt` em todas as imagens
- Contraste adequado de cores
- Navegação por teclado
- Estados de foco visíveis

## 📄 Licença

Este projeto foi desenvolvido para a equipe **Quarteto Fantástico**.

## 🤝 Contato

- **Email**: contato@quartetofantastico.com
- **Instagram**: [@quartetofantastico](https://instagram.com/quartetofantastico)

---

Desenvolvido com 💚 para a equipe Quarteto Fantástico
