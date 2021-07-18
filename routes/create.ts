import { Router } from 'express'
import createID from '../utils/createID'
import json from '../utils/json'

const router = Router()

router.get('/create', (_req, res) => {
  res.render('create')
})

router.post('/create', (req, res) => {
  const { url } = req.body
  const id = createID(5)
  json('./data.json').set(id, url)
  res.render('created', { id })
})

export default router
