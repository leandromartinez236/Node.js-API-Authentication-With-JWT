const router = require('express').Router()
const User = require('../model/User')

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const newUser = new User({
      name,
      email,
      password
    })
    const savedUser = await newUser.save()
    res.send(savedUser)
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router