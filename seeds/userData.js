const { User } = require('../models');

const userdata =
[
  {
    "username": "Real Monkey",
    "password": "password123"
  },
  {
    "username": "Fake Monkey",
    "password": "password123"
  },
  {
    "username": "Monkey Monkey",
    "password": "password123"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

