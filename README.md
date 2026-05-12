# Tela de Login

## Visão Geral

`tela_de_login` é um projeto simples em React Native com Expo que exibe uma tela de login. Ele inclui campos de e-mail e senha, validação básica e alertas de sucesso/erro.

## Funcionalidades

- Interface de tela de login
- Campos de e-mail e senha
- Validação para campos vazios
- Mensagens de alerta para sucesso ou ausência de informações

## Requisitos

- Node.js
- npm ou yarn
- Expo CLI (opcional, também pode usar `npx expo`)

## Instalação

1. Abra um terminal na pasta do projeto.
2. Instale as dependências:

### Usando npm

```bash
npm install
```

### Usando yarn

```bash
yarn install
```

## Executando o Aplicativo

Inicie o servidor de desenvolvimento do Expo:

### Usando npm

```bash
npm start
```

### Usando yarn

```bash
yarn start
```

Depois, abra o aplicativo em um dispositivo ou emulador usando o app Expo Go, ou execute no navegador pressionando `w` ou diretamente com:

```bash
npm run android
```

ou

```bash
npm run ios
```

## Estrutura do Projeto

- `App.js` — tela principal da aplicação e lógica de login
- `package.json` — metadados do projeto e scripts
- `app.json` — configuração do Expo
- `index.js` — ponto de entrada da aplicação
- `assets/` — arquivos e recursos do projeto

## Observações

Este projeto utiliza:

- `expo` ~54.0.33
- `react` 19.1.0
- `react-native` 0.81.5

Se quiser expandir o aplicativo, considere adicionar autenticação real, navegação e gerenciamento de estado.