import express from 'express';
import { userRouter } from './user/user.router';

const app = express()

app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.send('Hola Mundo...')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
