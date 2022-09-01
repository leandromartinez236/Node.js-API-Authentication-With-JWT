const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//import routes
const authRoute = require('./routes/auth')

dotenv.config()
//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(() => console.log('Mongodb is connected'))
  .catch(e => console.log(e))

//middlewares
app.use(express.json())

//middlewares routes
app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server is running on port', 3000))