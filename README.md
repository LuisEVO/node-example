# Instrucciones para crear un proyecto Node JS

- Crear una carpeta
- abrirla en el terminal
- ejecutar el siguiente comando `npm init` y dar enter en todas las preguntas que salgan
- instalar typescript: ejecutar `npm install typescript` o `npm i typescript`
- generar archivo de configuración `npx tsc --init`

## Ejecutar archivo con Node

- ejecutar el codigo `node index.js`

## Ejecutar archivo con Node y typescript


- instalar la dependencia `npm i ts-node`
- ejecutar el codigo `npx ts-node index.ts`

## Instalar Express

- `npm i express`
- `npm i -D @types/express`

```
import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('Hola Mundo...')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

```

## Ejcutar el proyecto express

- `npx ts-node src/index.ts`
- Para recargar automaticamente
- Instalar nodemon: `npm i -D nodemon`
- Ejecutar con nodemon: `npx nodemon src/index.ts`

## Crear un script

- en el archivo package.json agregar en la sección scripts
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon src/index.ts"
},
```
- ejecutar el comando `npm start` o `npm run start`