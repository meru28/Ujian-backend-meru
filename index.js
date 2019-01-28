const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1990
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Selamat Datang di API Ujian Backend (Meru)</h1>')
});

const { 
    movieRouter,
    kategoriRouter
} = require('./routers');

app.use('/movie', movieRouter);
app.use('/kategori',kategoriRouter);

app.listen(port, () => console.log(`API jalan di port ${port}`));



