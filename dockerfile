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

# Usa uma imagem leve do Nginx para servir a aplicação
FROM nginx:alpine

# Copia os arquivos construídos para o diretório padrão do Nginx
COPY --from=build /usr/src/app/dist/my-movies-spa-angular /usr/share/nginx/html

# Exponha a porta padrão do Nginx
EXPOSE 3000

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]