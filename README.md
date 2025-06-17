# Fokus ⏱️

Um aplicativo web de produtividade baseado na técnica Pomodoro, desenvolvido com HTML, CSS e JavaScript vanilla. O Fokus ajuda você a otimizar sua produtividade alternando entre períodos de foco e descanso.

## 🔗 Demo
Acesse o projeto online: [https://fokus-js-phi.vercel.app/](https://fokus-js-phi.vercel.app/)

## 📋 Funcionalidades

- **Timer Pomodoro**: Temporizador configurável para diferentes tipos de sessão
- **Três modos de operação**:
  - 🎯 **Foco**: 25 minutos para trabalho concentrado
  - ☕ **Descanso Curto**: 5 minutos para uma pausa rápida
  - 🛋️ **Descanso Longo**: 15 minutos para uma pausa mais longa
- **Música de fundo**: Toggle para ativar/desativar música ambiente
- **Interface responsiva**: Adaptada para desktop, tablet e mobile
- **Efeitos sonoros**: Sons de início, pausa e finalização do timer
- **Design moderno**: Interface com gradientes dinâmicos e transições suaves

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com variáveis CSS, gradientes e responsividade
- **JavaScript ES6+**: Lógica da aplicação e manipulação do DOM
- **Fonts**: Montserrat e Unbounded (Google Fonts)

## 🎨 Características do Design

- **Gradientes dinâmicos**: Cada modo possui sua própria paleta de cores
- **Variáveis CSS**: Sistema de cores consistente e fácil manutenção
- **Layout responsivo**: Design adaptativo para diferentes tamanhos de tela
- **Animações suaves**: Transições e efeitos visuais elegantes
- **Toggle customizado**: Componente switch estilizado para controle de música

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/fokus.git
   cd fokus
   ```

2. **Abra o projeto**:
   - Abra o arquivo `index.html` em seu navegador
   - Ou utilize um servidor local (Live Server, etc.)

3. **Começe a usar**:
   - Escolha o modo desejado (Foco, Descanso Curto ou Descanso Longo)
   - Ative a música se desejar
   - Clique em "Começar" para iniciar o timer
   - Use "Pausar" para interromper o cronômetro

## 📱 Responsividade

O aplicativo é totalmente responsivo, com breakpoints específicos:
- **Desktop**: Largura completa com layout otimizado
- **Tablet** (768px - 1024px): Layout adaptado para telas médias
- **Mobile** (até 767px): Interface compacta com elementos redimensionados

## 🔊 Recursos de Áudio

- **Música ambiente**: Luna Rise Part One (loop contínuo)
- **Som de início**: Feedback ao iniciar o timer
- **Som de pausa**: Feedback ao pausar o timer
- **Som de finalização**: Alerta quando o tempo termina

## 📁 Estrutura do Projeto

```
fokus/
├── index.html          # Estrutura principal
├── styles.css          # Estilos e responsividade
├── script.js           # Lógica da aplicação
├── imagens/            # Assets visuais
│   ├── logo.png
│   ├── foco.png
│   ├── descanso-curto.png
│   ├── descanso-longo.png
│   ├── play_arrow.png
│   ├── pause.png
│   └── pattern.png
└── sons/               # Arquivos de áudio
    ├── luna-rise-part-one.mp3
    ├── play.wav
    ├── pause.mp3
    └── beep.mp3
```

## 💡 Conceitos Aplicados

- **Manipulação do DOM**: Seleção e modificação de elementos
- **Event Listeners**: Gerenciamento de eventos de clique e mudança
- **Timers JavaScript**: Uso de `setInterval` e `clearInterval`
- **Audio API**: Controle de reprodução de áudio
- **CSS Custom Properties**: Variáveis CSS para temas dinâmicos
- **Responsive Design**: Media queries e design adaptativo

## 🎯 Técnica Pomodoro

O Fokus implementa a técnica Pomodoro, que consiste em:
1. Trabalhar por 25 minutos (Foco)
2. Fazer uma pausa de 5 minutos (Descanso Curto)
3. Repetir o ciclo 3-4 vezes
4. Fazer uma pausa longa de 15 minutos (Descanso Longo)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Submeter pull requests

## 👨‍💻 Autor

**Mauricio Grass de Bronstein**

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
