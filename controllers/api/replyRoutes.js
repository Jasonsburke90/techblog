const router = require('express').Router();
const { Reply } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:post_id', withAuth, async (req, res) => {
  try {
    const newReply = await Reply.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.post_id,
    });
    res.status(200).json(newReply);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
