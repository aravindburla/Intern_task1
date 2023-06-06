import express from 'express'

const app = express()

import router from './routes/routes.js'

app.use('/api/',router);

app.listen(3000,()=>{
    console.log('server is running')
})