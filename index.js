const express = require('express')
const connectDB = require('./config/dbConnection')
const shortUrl = require('./models/shortUrl')
const app = express()

connectDB();
const PORT = process.env.PORT || 3001

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', async(req,res)=>{
    const shortUrls = await shortUrl.find()
    res.render('home', {shortUrls: shortUrls})
})

app.post('/shortUrls', async(req,res)=>{
await shortUrl.create({complete: req.body.completeUrl})

res.redirect('/')
})

app.get('/:shortUrl',async (req,res)=>{
  const shortUrl = await shortUrl.findOne({short: req.params.shortUrl})
})

app.listen(PORT,(req,res)=>{
 console.log(`This server is listening on port ${PORT}` )
})