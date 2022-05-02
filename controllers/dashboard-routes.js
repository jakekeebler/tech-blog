const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// all posts dashboard
router.get('/', withAuth, async (req, res) => {
  try {

    const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
console.log(posts);
    res.render('all-posts', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// after click on new post button
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

// when we click on the post itself
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
