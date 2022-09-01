const router = require('express').Router()

router.post('/register', async (req, res) => {
  res.send('Register')
})

module.exports = router