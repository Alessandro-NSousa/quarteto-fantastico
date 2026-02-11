# Guia para Adicionar Imagens na Galeria

A galeria de fotos agora usa um **carrossel com efeito 3D (Coverflow)** que permite adicionar quantas imagens você quiser.

## Como Adicionar uma Nova Imagem

1. **Adicione sua imagem** na pasta `assets/images/` (por exemplo: `imagem-07.jpeg`)

2. **No arquivo `index.html`**, localize a seção da galeria (procure por `id="galeria"`)

3. **Copie este bloco de código**:

```html
<!-- Image 7 -->
<div class="swiper-slide">
  <div class="group relative overflow-hidden rounded-xl shadow-lg bg-quarteto-blue-light h-96 cursor-pointer flex items-center justify-center p-4">
    <img src="assets/images/imagem-07.jpeg" alt="Quarteto Fantástico - Momento 7" class="max-w-full max-h-full object-contain">
    <div class="absolute inset-0 bg-gradient-to-t from-quarteto-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
      <div class="p-4 text-white">
        <p class="text-sm font-semibold">Momento 7</p>
      </div>
    </div>
  </div>
</div>
```

4. **Cole o bloco** dentro de `<div class="swiper-wrapper">`, após a última imagem

5. **Atualize**:
   - `src="assets/images/NOME-DA-SUA-IMAGEM.jpeg"` com o nome correto da imagem
   - `alt="Quarteto Fantástico - Momento X"` com a descrição apropriada
   - `Momento X` com o número/título da foto

## Exemplo Completo

Se você tem 6 imagens e quer adicionar a 7ª, adicione o bloco após a Image 6:

```html
<!-- Image 6 -->
<div class="swiper-slide">
  ...
</div>

<!-- ADICIONE AQUI -->
<!-- Image 7 -->
<div class="swiper-slide">
  <div class="group relative overflow-hidden rounded-xl shadow-lg bg-quarteto-blue-light h-96 cursor-pointer flex items-center justify-center p-4">
    <img src="assets/images/imagem-07.jpeg" alt="Quarteto Fantástico - Corrida Municipal" class="max-w-full max-h-full object-contain">
    <div class="absolute inset-0 bg-gradient-to-t from-quarteto-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
      <div class="p-4 text-white">
        <p class="text-sm font-semibold">Corrida Municipal 2026</p>
      </div>
    </div>
  </div>
</div>
```

## Funcionalidades do Carrossel

✅ **Efeito 3D Coverflow** - As imagens aparecem em 3D com rotação  
✅ **Navegação por setas** - Clique nas setas laterais para navegar  
✅ **Navegação por pontos** - Clique nos pontos na parte inferior  
✅ **Autoplay** - Troca automática a cada 4 segundos  
✅ **Lightbox** - Clique na imagem para visualizar em tela cheia  
✅ **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile  
✅ **Teclado** - Use as setas do teclado para navegar  

## Dicas

- Use imagens de boa qualidade (recomendado: 1200x800px ou maior)
- Formatos suportados: JPG, JPEG, PNG, WebP
- Mantenha um tamanho razoável de arquivo (< 500KB) para melhor performance
- O carrossel se adapta automaticamente ao número de imagens

---

**Desenvolvido para:** Quarteto Fantástico  
**Tecnologias:** Swiper.js + Tailwind CSS
