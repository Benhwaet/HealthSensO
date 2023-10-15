const { User } = require('../models');

const userData = [
    {
        "username": "Sal",
        "email": "sal@hotmail.com",
        "password": "password1234"
      },
      {
        "username": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "coolPw2020"
      },
      {
        "username": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "amiko2k20!"
      }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;