const express = require('express');
const router = express.Router();
const {
    kategoriController
} = require('../controllers');

router.get('/getlistkategori', kategoriController.getListKategori)
router.post('/addkategori', kategoriController.addKategori)
router.put('/editkategori/:id', kategoriController.editKategori)
router.delete('/deletekategori/:id', kategoriController.deleteKategori)

module.exports = router;