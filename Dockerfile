#Usaremos una imagen de linux con Node.js v12
FROM node:14

# Elegimos el directorio en el que nos situaremos para ejecutar los siguientes comandos
WORKDIR /usr/src/app

# Copiamos el package.json del proyecto que contiene las dependencias del mismo
COPY package*.json ./

# Ejecutamos "npm install" para instalar las dependencias del proyecto
RUN npm install

# Copiamos todo el contenido de nuestra raiz a la imagen
COPY . .

#Exponemos el puerto por el que se realizan las peticiones al servicio
EXPOSE 2000

#Ejecutamos el comando que deja el servicio escuchando constantemente
CMD [ "node", "index.js" ]
