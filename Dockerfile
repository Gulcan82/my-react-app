# Verwende das Node-Image als Basis
FROM node:14

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Anwendungsquellcodes
COPY . .

# Baue die App für die Produktion
RUN npm run build

# Verwende ein leichtes Webserver-Image für die Bereitstellung
FROM nginx:alpine

# Kopiere die statischen Dateien von der Build-Stufe
COPY --from=0 /app/build /usr/share/nginx/html

# Exponiere Port 80
EXPOSE 80

# Starte den Nginx-Server
CMD ["nginx", "-g", "daemon off;"]
