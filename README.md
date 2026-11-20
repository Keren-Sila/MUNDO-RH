# Mundo RH — Jogo Educativo de Recursos Humanos & Departamento Pessoal

![Mundo RH Logo](./assets/icons/icon.svg)

> **Mundo RH** é um jogo educativo interativo e moderno desenvolvido no modelo **PWA (Progressive Web App)**, projetado para ensinar e fixar conhecimentos essenciais de Recursos Humanos, Departamento Pessoal, cálculos trabalhistas e legislação CLT de forma envolvente, prática e com funcionamento **100% offline**.

---

## 🎯 Visão Geral e Proposta Pedagógica

O principal objetivo do Mundo RH não é apenas fazer o usuário acertar testes de múltipla escolha, mas capacitá-lo a:
- **Compreender o que significa cada termo** do universo corporativo e jurídico de RH.
- **Entender para que serve e onde é aplicado** na rotina das empresas.
- **Interpretar recibos de pagamento (holerites)** sem depender de decorar siglas.
- **Recuperar informações com agilidade** quando precisar explicar um conceito verbalmente em uma reunião ou atendimento ao colaborador.

---

## 🚀 Funcionalidades Principais

### 1. Mundos de Aprendizagem (6 Mundos Iniciais)
- **Mundo 01 — Folha de Pagamento:** Salário, Salário-base, Bruto vs. Líquido, Proventos, Descontos, INSS, FGTS, IRRF, Pensão Alimentícia, DSR e reflexos, Horas Extras (50%/100%), Adicional Noturno, Faltas, Atrasos, Vale-transporte (regra dos 6%), Vale-refeição, Convênio Médico e Ajuda de Custo.
- **Mundo 02 — Segurança e Adicionais:** Insalubridade e seus graus (10%, 20%, 40% sobre o salário mínimo), Periculosidade (30% sobre o salário-base), Atividades Perigosas (NR-16), Diferenças e Não-cumulatividade.
- **Mundo 03 — Recrutamento e Seleção:** Recrutamento Interno vs. Externo, Triagem de Currículos, Entrevistas por Competências (STAR), Hard vs. Soft Skills, Admissão e eSocial.
- **Mundo 04 — Treinamento e Desenvolvimento:** LNT (Levantamento de Necessidades), Capacitação no Cargo, Desenvolvimento Profissional, Avaliação de Desempenho, Clima vs. Cultura Organizacional.
- **Mundo 05 — Departamento Pessoal:** Registro Legal (art. 41 CLT), Jornadas e Escalas, Controle de Ponto (Portaria 671), Férias (Período Aquisitivo e Concessivo + 1/3), 13º Salário (Prazos e Parcelas), Benefícios e Obrigações Fiscais (DCTFWeb).
- **Mundo 06 — Rescisão Contratual:** Demissão sem Justa Causa, Pedido de Demissão, Justa Causa (Art. 482 CLT), Aviso-prévio Proporcional (Lei 12.506), Saldo de Salário, Férias Vencidas/Proporcionais, 13º Proporcional, Multa de 40% do FGTS e Prazo de Quitação (10 dias corridos).

### 2. 6 Modalidades de Jogos Interativos
1. **Caça-palavras:** Grade interativa responsiva para toque e mouse com pistas didáticas conceituais e explicação imediata após encontrar cada palavra.
2. **Quiz de RH:** Perguntas situacionais com feedback que detalha a base jurídica e aplicação no trabalho.
3. **Complete a Palavra:** Descubra os conceitos completando letras com teclado virtual ou digitação.
4. **Verdadeiro ou Falso:** Julgamento de afirmações baseadas na CLT com justificativas jurídicas diretas.
5. **Ligue os Conceitos:** Conecte termos técnicos às suas respectivas definições práticas.
6. **Desafio Relâmpago (Blitz):** Modo cronometrado para estimulação rápida da memória (com opção de acessibilidade para jogar sem limite de tempo).

### 3. Simulador Interativo de Holerite (Recibo de Pagamento)
- Interface realista de demonstrativo de pagamento de salário.
- Inspeção com um toque em cada rubrica (Código, Descrição, Referência, Provento ou Desconto).
- Modal explicativo detalhado: O que é, Para que serve, Como calcular e Exemplo de rotina real.
- Modo "Desafios do Holerite" para testar a interpretação dos valores brutos, líquidos e encargos patronais (ex: esclarecendo por que o FGTS não é descontado do empregado).

### 4. Sistema de Progressão & Gamificação
- **Pontos de Experiência (XP):** Recompensas para cada atividade concluída.
- **Níveis e Títulos:**
  - Nível 1: *Iniciante em RH*
  - Nível 2: *Explorador de Conceitos*
  - Nível 3: *Aprendiz de DP*
  - Nível 4: *Conhecedor de RH*
  - Nível 5: *Especialista em Formação*
  - Nível 6: *Mestre das Rotinas Trabalhistas*
- **Sequência de Estudos (Streak):** Monitoramento diário com ícone de chama.
- **Missões Diárias:** 3 tarefas diárias que concedem XP extra.
- **Medalhas e Conquistas:** Desbloqueio de insígnias conforme marcos atingidos.

### 5. Sistema de Revisão Inteligente (Repetição Espaçada)
- O aplicativo registra automaticamente os conceitos em que o jogador errou.
- Módulo dedicado de **Flashcards** para fixação de conceitos até o domínio pleno da matéria.

### 6. PWA & Funcionamento 100% Offline
- `manifest.webmanifest` e `sw.js` (Service Worker) com estratégia Cache-First.
- Persistência dos dados e progresso localmente via `LocalStorage`.
- Áudio sintetizado nativamente via **Web Audio API** (sem dependência de download de arquivos MP3 que poderiam falhar offline).
- Ícones vetoriais SVG embutidos.

---

## 📂 Arquitetura e Separação de Responsabilidades

```
MUNDO-RH/
├── index.html                   # Estrutura semântica principal
├── manifest.webmanifest         # Configuração PWA
├── sw.js                        # Service Worker e Cache Offline
├── README.md                    # Documentação do projeto
├── assets/
│   └── icons/                   # Ícones vetoriais SVG (192, 512, maskable)
├── css/
│   ├── base.css                 # Variáveis, reset e tipografia
│   ├── layout.css               # Estrutura do app, header e sidebar
│   ├── components.css           # Botões, modais, caixas e componentes
│   ├── pages.css                # Estilos do Holerite, Home e Mundos
│   └── responsive.css           # Responsividade e acessibilidade
├── data/
│   ├── worlds.js                # Metadados e estrutura dos 6 mundos
│   ├── questions.js             # Banco de questões de todas as mecânicas
│   ├── glossary.js              # Glossário completo e definições práticas
│   ├── achievements.js          # Conquistas, medalhas e regras
│   └── receipt-examples.js      # Modelos didáticos de holerite
└── js/
    ├── app.js                   # Inicialização geral e Service Worker
    ├── navigation.js            # Roteador SPA e alternância de telas
    ├── storage.js               # Persistência local (LocalStorage)
    ├── components/
    │   ├── header.js            # Cabeçalho superior com XP e Streak
    │   ├── sidebar.js           # Menu de navegação responsivo
    │   ├── modal.js             # Modais didáticos acessíveis
    │   └── progress-bar.js      # Barras de progresso reutilizáveis
    ├── games/
    │   ├── word-search.js       # Modalidade Caça-palavras
    │   ├── quiz.js              # Modalidade Quiz de múltipla escolha
    │   ├── word-completion.js   # Modalidade Complete a palavra
    │   ├── true-false.js        # Modalidade Verdadeiro ou Falso
    │   ├── matching.js          # Modalidade Ligue os conceitos
    │   └── challenge.js         # Modalidade Desafio Relâmpago
    ├── features/
    │   ├── receipt-simulator.js # Simulador interativo de holerite
    │   ├── review.js            # Sistema de repetição espaçada
    │   ├── achievements.js      # Painel de conquistas e perfil
    │   ├── daily-challenge.js   # Missões diárias
    │   └── experience.js        # Regras de cálculo de XP e níveis
    └── utils/
        ├── helpers.js           # Moeda, áudio nativo, confetes e embaralhamento
        └── validation.js        # Verificação e normalização de respostas
```

---

## 🛠️ Como Executar Localmente

Como o projeto foi construído com tecnologias web puras e modernas (HTML5, CSS3, ES6 Modules):

1. **Via Servidor Local (Recomendado para módulos ES6 e Service Worker):**
   - Com Python:
     ```bash
     python -m http.server 8000
     ```
   - Ou com Node.js (npx serve / live-server):
     ```bash
     npx serve .
     ```
   - Abra o navegador em `http://localhost:8000`.

2. **Instalação como PWA:**
   - No Chrome / Edge / Safari (iOS): clique em "Instalar aplicativo" ou "Adicionar à Tela de Início".
   - O aplicativo estará pronto para funcionar mesmo sem qualquer conexão com a internet!

---

## ⚖️ Conformidade Legal e Técnica
- Informações baseadas na **Consolidação das Leis do Trabalho (CLT)**, Normas Regulamentadoras (**NR-15 e NR-16**), Lei do Vale-transporte (**Lei 7.418/85**), Lei do FGTS (**Lei 8.036/90**) e **Portaria MTP 671/2021**.
- Código limpo, componentizado, com validações e sem dependências externas desnecessárias.
