const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Bananas?",
    "postContent": "I was wondering if someone could help me order them online...",
    "userId": 1
  },
  {
    "postTitle": "Found the computer.",
    "postContent": "How do I uninstall system32",
    "userId": 2
  },
  {
    "postTitle": "Monkey",
    "postContent": "Monkey",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;