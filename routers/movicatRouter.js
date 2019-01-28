const express = require('express');
const router = express.Router();
const {
    movicatController
} = require('../controllers');

router.get('/getlistmovicategory', movicatController.getListMoviCategory);
router.post('/addmovicategory', movicatController.addMoviCategory);
router.delete('/deletemovicategory', movicatController.deleteMoviCategory);

module.exports = router;