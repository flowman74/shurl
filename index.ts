import express from 'express'
import create from './routes/create'
import json from './utils/json'

const app = express()
const port = 4000

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(create)

app.get('/:id', (req, res) => {
  const { id } = req.params
  if (json('./data.json').get(id)) res.redirect(json('./data.json').get(id))
  else res.render('404')
})

app.get('/', (_req, res) => {
  res.render('home')
})

app.get('*', (_req, res) => {
  res.render('404')
})

app.listen(port)
