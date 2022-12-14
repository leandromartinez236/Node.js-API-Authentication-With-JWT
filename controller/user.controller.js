const User = require('../model/User')

const register = async (req, res) => {
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
}

module.exports = {
  register
}