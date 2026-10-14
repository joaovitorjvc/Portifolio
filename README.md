# Meu Portfólio

Portfólio pessoal de João Vitor de Carvalho, desenvolvido para apresentar sua trajetória acadêmica, interesses e certificações na área de tecnologia.

## 🚀 Sobre o projeto

O projeto é um site estático com três páginas conectadas:

- **Início** (`index.html`) — apresentação pessoal e links de contato.
- **Sobre Mim** (`sobre.html`) — formação, experiências e áreas de interesse.
- **Certificações** (`certifica.html`) — formação acadêmica e cursos concluídos ou em andamento.

A interface utiliza um tema escuro, gradientes, cartões translúcidos e animações suaves para criar uma experiência mais fluida em desktop e mobile.

## ✨ Funcionalidades

- Navegação compartilhada com indicação da página atual.
- Menu mobile acessível com suporte à tecla `Escape`.
- Animações de entrada acionadas conforme o conteúdo aparece na tela.
- Transição suave entre páginas internas.
- Barra de progresso da rolagem e cabeçalho reativo.
- Filtro de certificações por status: todos, em andamento e concluídos.
- Contador de itens filtrados atualizado dinamicamente.
- Ano do rodapé preenchido automaticamente pelo JavaScript.
- Respeito à preferência `prefers-reduced-motion` do sistema.
- Layout responsivo sem dependências de frameworks.

## 🛠️ Tecnologias utilizadas

- **HTML5 semântico** — estrutura e acessibilidade.
- **CSS3** — tema compartilhado, grid, responsividade, gradientes e animações.
- **JavaScript vanilla** — interações sem bibliotecas externas.
- **Google Fonts** — Nunito Sans e Space Mono.
- **Git & GitHub** — versionamento e hospedagem.

## 🌐 Acesse o site

- GitHub Pages: [joaovitorjvc.github.io/Portifolio](https://joaovitorjvc.github.io/Portifolio/)
- Vercel: [portifolio-c97f-eazo2ptk3-joao-vitors-projects-e2104fe2.vercel.app](https://portifolio-c97f-eazo2ptk3-joao-vitors-projects-e2104fe2.vercel.app/)

## 📂 Estrutura de arquivos

```text
Portifolio/
├── index.html              # Página inicial
├── sobre.html              # Página Sobre Mim
├── certifica.html          # Página de certificações
├── style.css               # Estilos compartilhados
├── script.js               # Interações e animações
├── imagens/                # Imagens de fundo e contato
├── style1.css              # CSS antigo da página inicial
├── style2.css              # CSS antigo da página Sobre Mim
├── style3.css              # CSS antigo de certificações
└── README.md               # Documentação
```

Os arquivos `style1.css`, `style2.css` e `style3.css` foram mantidos como referência, mas as páginas atuais carregam somente o `style.css` compartilhado.

## ▶️ Execução local

Como o projeto não possui etapa de build, basta abrir `index.html` no navegador. Para uma experiência mais próxima da publicação, também é possível servir a pasta com qualquer servidor HTTP local.
