const express = require('express');
const router = express.Router();
const {
    movieController
} = require('../controllers');

router.get('/getlistmovie', movieController.getListMovie);
router.post('/addmovie', movieController.addMovie);
router.put('/editmovie/:id', movieController.editMovie);
router.delete('/deletemovie/:id', movieController.deleteMovie);

module.exports = router;