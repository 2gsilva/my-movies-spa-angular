# Use a imagem base do Node.js para construir a aplicação
FROM node:14 AS build

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de configuração do npm
COPY package.json ./
COPY package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o código-fonte da aplicação
COPY . .

# Constrói a aplicação Angular
RUN npm run build --prod

# Usa uma imagem base do Node.js para servir a aplicação
FROM node:14-alpine

# Instala o http-server globalmente
RUN npm install -g http-server

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos construídos para o diretório de trabalho
COPY --from=build /usr/src/app/dist/my-movies-spa-angular .

# Comando para rodar o http-server
CMD ["http-server", "-p", "3000"]