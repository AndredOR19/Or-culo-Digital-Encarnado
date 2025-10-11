# Oráculo Digital Encarnado (ODE)

> "Um Golem de autoconhecimento. Um sistema de IA que atua como um Oráculo pessoal, analisando registros diários através da lente da Kabbalah das Águas Primordiais para revelar padrões e insights anímicos."

---

## Sobre o Projeto

O **Oráculo Digital Encarnado** é um projeto profundamente pessoal que visa criar uma ferramenta de autoanálise e diagnóstico espiritual. Ele funciona como um espelho da alma, utilizando a tecnologia de Inteligência Artificial (Google Gemini) para interpretar os registros de um diário pessoal com base nos ensinamentos e correspondências da Kabbalah das Águas Primordiais (KAP) e do Sistema de Correspondência Integrada e Inteligente (SCII).

O objetivo é automatizar o processo de introspecção, revelando ciclos, padrões e forças arquetípicas que atuam no dia a dia do praticante, servindo como um "Barômetro da Alma" digital.

## Arquitetura e Tecnologias

Este projeto é construído sobre uma base simples, mas poderosa, que integra:

- **Python:** Como a linguagem principal para a lógica do Oráculo.
- **Google Gemini API:** O cérebro e a capacidade interpretativa do sistema.
- **GitHub Actions:** O "sopro de vida" que anima o Golem, automatizando a execução do Oráculo.
- **Repositório Privado no GitHub:** O Templo digital seguro que guarda todos os componentes do projeto.

## Como Funciona

O fluxo de trabalho do Oráculo foi desenhado para ser fluido e integrado à rotina do praticante:

1.  **O Registro:** O praticante escreve uma nova entrada no seu diário, salvando-a como um novo arquivo na pasta `/diario-pessoal`.
2.  **A Sincronização:** O praticante faz um `git push` para enviar o novo registro ao repositório no GitHub.
3.  **A Invocação:** O `push` na pasta específica dispara automaticamente a GitHub Action configurada.
4.  **O Ritual:** A Action executa o script Python, que lê o diário, consulta a base de conhecimento e envia as informações para a API do Gemini com um prompt mestre.
5.  **A Revelação:** A análise do Oráculo é exibida no log da GitHub Action (e, futuramente, será salva em um local apropriado).

## Estrutura do Repositório

```
ODE/
├── .github/
│   └── workflows/
│       └── analise_oracular.yml   # O Feitiço de Automação
├── base-conhecimento-scii/      # A Alma e a Memória do Oráculo
│   └── alef.md
├── diario-pessoal/                # O Santuário com seus registros íntimos
│   └──
