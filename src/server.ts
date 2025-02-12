import express from 'express'
import router from './routes/pga.routes';

const app = express()
const port = process.env.PORT || 3000;

// API routes
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})