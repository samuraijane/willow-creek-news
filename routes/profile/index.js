const router = require('express').Router();

router.get('/info', (req, res) => {
  res.json(req.session.profile);
});

module.exports = router;