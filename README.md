# 🎬 StatusCraft

**O formato perfeito para o teu Status e Reels.**

StatusCraft é uma aplicação web que ajuda criadores de conteúdo a formatar, cortar e otimizar vídeos curtos para partilha em diferentes redes sociais — WhatsApp Status, Instagram Reels e Facebook Feed — cada uma com as suas próprias regras de duração e formato.

Projeto desenvolvido por **Kelvin Arcanjo**, fundador da **Arcanjo Labs**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=flat&logo=ffmpeg&logoColor=white)

---

## 🚀 Funcionalidades Atuais

- **Interface responsiva e acessível**, construída com HTML5 semântico e mobile-first.
- **Validação de formulário em tempo real**, usando a Validation API nativa do browser (`checkValidity`) combinada com feedback visual imediato via `classList`.
- **Envio de dados assíncrono** para o servidor através da `Fetch API`, com corpo em `JSON` e cabeçalhos apropriados.
- **Gestão de estado de Loading** no botão de submissão: o texto muda para *"A processar..."*, o botão é desativado (`disabled`) para prevenir cliques duplicados, e o CSS aplica uma transição de cor consistente com o estado.
- **Servidor Node.js nativo** (sem frameworks como Express), construído inteiramente com os módulos `http`, `fs` e `child_process`.
- **Motor de processamento de vídeo real**: o servidor recebe o destino escolhido, calcula automaticamente a duração de corte segundo a regra de negócio de cada rede social, e invoca o **FFmpeg** para processar o vídeo.
- **Tratamento de erros robusto** em ambas as pontas — `try/catch/finally` no cliente, códigos de estado HTTP corretos (`404`, `500`) no servidor.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologias |
|---|---|
| **Front-end** | HTML5 semântico, CSS3 (Custom Properties, Flexbox, pseudo-classes de estado como `:disabled`, `:hover`), JavaScript ES6+ (Async/Await, Fetch API, DOM Events, `classList`) |
| **Back-end** | Node.js nativo — módulos `http`, `fs`, `child_process` (sem frameworks) |
| **Processamento de vídeo** | [FFmpeg](https://ffmpeg.org/) via `child_process.exec` |

---

## 📌 Status do Projeto & Próximos Passos

**✅ Fase 1 — Front-end & Integração do Servidor Base: concluída a 100%.**

Esta fase entregou uma aplicação end-to-end funcional: interface completa, comunicação cliente-servidor assíncrona, e um motor de processamento de vídeo real a correr sobre Node.js puro e FFmpeg.

O projeto foi **intencionalmente pausado neste ponto**, por decisão estratégica do autor, para permitir foco total na consolidação do ecossistema Front-End avançado — **React.js, TypeScript e consumo de APIs complexas** — antes de avançar para as camadas seguintes do produto.

### 🔜 Fase 2 — Planeada (Futuro)

- [ ] Aplicação de **marca d'água personalizada** ("by Arcanjo Labs") via parâmetros avançados do FFmpeg (filtros `overlay`/`drawtext`).
- [ ] **Servir o ficheiro de vídeo processado** diretamente ao browser, permitindo pré-visualização e download do resultado final.
- [ ] **Download automático de vídeos** a partir de URLs de redes sociais (TikTok, Instagram, Facebook), substituindo o ficheiro de teste local atualmente usado como simulação.
- [ ] Gestão de fila de processamento para múltiplos pedidos simultâneos.
- [ ] Migração da interface para **React + TypeScript**.

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (testado com v24.x)
- [FFmpeg](https://www.gyan.dev/ffmpeg/builds/) instalado e adicionado ao `PATH` do sistema
- Um vídeo de teste (`.mp4`) colocado na pasta `videos/` com o nome `teste.mp4`, usado como simulação enquanto a integração de download real não está implementada

### Passos

```bash
# Clona o repositório
git clone https://github.com/kelvin-arcanjo/statuscraft-app.git

# Entra na pasta do projeto
cd statuscraft-app

# Confirma que o Node.js e o FFmpeg estão acessíveis
node -v
ffmpeg -version

# Corre o servidor
node server.js
```

Depois do servidor arrancar, abre o browser em:

```
http://localhost:3000
```

---

## 👤 Autor

**Kelvin Arcanjo**
Fundador & CEO — [Arcanjo Labs](https://arcanjos.org)

---

<p align="center"><sub>© 2026 StatusCraft — by Arcanjo Labs</sub></p>
