# 🐦 Flutter Install Guide

Guia interativo de instalação do Flutter SDK com VS Code — do zero ao primeiro projeto.

## 📁 Estrutura do Projeto

```
flutter-install-guide/
├── index.html    # Estrutura e marcação da página
├── styles.css    # Estilos, variáveis CSS e animações
├── main.js       # Lógica interativa (cursor, passos, progresso)
└── README.md     # Este arquivo
```

## ✨ Funcionalidades

- **Guia passo a passo** com 5 etapas de instalação
- **Barra de progresso** em tempo real na navegação
- **Cursor customizado** com efeito de anel animado
- **Seleção de SO** com instruções específicas para Windows, macOS e Linux
- **Botões de copiar** para todos os comandos e caminhos
- **Partículas animadas** no hero da página
- **Sidebar navegável** com indicadores de conclusão
- **Banner de conclusão** ao finalizar todos os passos
- Design totalmente responsivo

## 🚀 Como usar

Basta abrir o `index.html` diretamente no navegador. Nenhuma dependência ou build step necessário.

```bash
# Opção 1 — abrir diretamente
open index.html

# Opção 2 — servidor local simples (Python)
python3 -m http.server 8080
# Acesse: http://localhost:8080
```

> **Atenção:** os três arquivos (`index.html`, `styles.css`, `main.js`) precisam estar na **mesma pasta** para o projeto funcionar corretamente.

## 🎨 Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e marcação semântica |
| CSS3 | Estilos, variáveis, animações e responsividade |
| JavaScript (Vanilla) | Interatividade e estado da aplicação |
| Google Fonts | Tipografia (Syne, JetBrains Mono, Outfit) |

## 📐 Arquitetura CSS

As cores e tokens de design são definidos via variáveis CSS em `:root` no `styles.css`, facilitando customizações:

```css
:root {
  --bg: #070510;       /* Fundo principal */
  --acc: #bf6eff;      /* Cor de destaque (roxo) */
  --teal: #4ef0c0;     /* Cor de sucesso (teal) */
  --text: #ede8ff;     /* Texto principal */
  /* ... */
}
```

## 🧩 Funções JavaScript (`main.js`)

| Função | Descrição |
|---|---|
| `toggle(i)` | Abre/fecha um card de passo |
| `jumpTo(i)` | Navega diretamente para um passo |
| `markDone(i)` | Marca um passo como concluído |
| `next(i)` | Avança para o próximo passo |
| `checkAll()` | Exibe o banner de conclusão final |
| `selectOS(el, os)` | Filtra instruções por sistema operacional |
| `cp(text, btn)` | Copia texto para a área de transferência |

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| `≤ 860px` | Sidebar lateral oculta |
| `≤ 768px` | Grid de cards muda para 2 colunas, nav links ocultados |
| `≤ 600px` | Layout de coluna única, nav simplificada |

## 🔗 Links úteis

- [Documentação oficial do Flutter](https://flutter.dev/docs)
- [Flutter SDK — Instalação](https://docs.flutter.dev/get-started/install)
- [Extensão Flutter para VS Code](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter)
