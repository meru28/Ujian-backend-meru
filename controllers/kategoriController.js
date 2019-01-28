const conn = require('../database');

module.exports = {
    getListKategori: (req, res) => {
        var sql = 'SELECT * from categories;';
        conn.query(sql, (err, results) => {
            if(err) throw err;

            res.send(results);
        })
    },
    addKategori: (req, res) => {
        data = {
            nama: req.body.namakategori
        }
        var sql = `SELECT * FROM categories WHERE nama = '${data.nama}';`;
        var sql1 = `INSERT INTO categories SET ?`
        conn.query(sql, data, (err, results) => {
            if(err) throw err;
            console.log(results.length);
            if(results.length == 0){
                conn.query(sql1, data, (err1, results1) => {
                    if(err1) throw err1;
                    console.log(results1);
                    res.send({status: "Tambah Kategori Sukses", inserId: results.insertId, nama: req.body.namakategori})
                })
            }

        })
    },
    editKategori: (req, res) => {
        data = {
            nama: req.body.namakategori
        }
        sql = `UPDATE categories SET ? WHERE id=${req.params.id}`
        conn.query(sql, data, (err, results) => {
            if(err) throw err;
            console.log(results)
            res.send({status: "Update kategori sukses", id: req.params.id, updateRows: results.changeRows})
        })
    },
    deleteKategori: (req, res) => {
        sql = `DELETE FROM categories WHERE id=${req.params.id};`;
        sql1 = `DELETE FROM moviecat WHERE idcategory=${req.params.id};`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            console.log(results);
            if(results.affectedRows == 0){
                res.send({error: "ID Kategori tidak ada!"})
            }
            conn.query(sql1, (err1, results1) => {
                if(err1) throw err1;
                console.log(results1)
                res.send({status: "Hapus Kategori Sukses", idcategory: req.params.id})
            })
        })
    }
}