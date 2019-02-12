const { Router }= require('express');

const router = new Router();

router.get('/new', (req,res)=> {
  res.json({corgi: req.app.locals.engine.generation.newCorgi() });
}); 

module.exports = router;