import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';

import Objava from './model/objava';
import User from './model/user';
import { runInNewContext } from 'vm';


const app = express();
const router = express.Router();
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/');
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB povezan!');
});

app.use('/', router);
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/uploads'));
app.listen(port, ()=> console.log('express je ziv !'));

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        let filename = Date.now() + '_' + file.originalname;
        cb(null, filename);
    }
});
const upload = multer({
    storage: storage
});

const bc = require('bcrypt');
const jwt = require('jsonwebtoken');
const key_jwt = 'dulevujosevic';
const provera = require('./ath');


router.route('/galerija').get((req, res) => {
    Objava.find((err, objave) => {
        if(err) res.send(err);
        else {
            var filter = [];
            objave.forEach(function(o) {
                if(o.kategorija != "Poruka") filter.push(o);
              });
            res.json(filter);
        }
    });
});

router.route('/admin').get(provera, (req, res) => {
    Objava.find((err, objave) => {
        if(err) res.send(err);
        else {
            var filter = [];
            objave.forEach(function(o) {
                if(o.kategorija == "Poruka") filter.push(o);
              });
            res.json(filter);
        }
    });
});

router.route('/galerija/detalji/:id').get((req, res) => {
    Objava.findById(req.params.id, (err, obj) => {
        if(err) console.log(err);
        else res.json(obj);
    });
});



router.route('/galerija/dodaj').post(
    provera,
    upload.fields([{ name: 'slika', maxCount: 1 }, { name: 'sveslike'}]),
    (req,res) => {

        var sl = [];
        for(let x of req.files['sveslike']){
            sl.push(x.filename);
        }
        let objava = new Objava({
            naziv: req.body.naziv,
            kategorija: req.body.kategorija,
            opis: req.body.opis,
            glavnaslika: req.files['slika'][0].filename,
            sveslike: sl
        });
        objava.save()
            .then(objava => {
                res.status(200).json({"objava": "uspesno dodata"});
            })
            .catch(err=>{
                res.status(400).send("dodaavanje nije uspelo");
            });
    
});

router.route('/galerija/izmeni/:id').post(provera, upload.fields([{ name: 'slika'}, { name: 'sveslike'}]),(req, res) => {
    Objava.findById(req.params.id, (err, objava) => {
        if(!objava) return next(new Error('Neuspelo ucitavanje objave'));
        else{
            objava.naziv = req.body.naziv;
            objava.kategorija = req.body.kategorija;
            objava.opis = req.body.opis;
            if(req.files['slika']){
                objava.glavnaslika = req.files['slika'][0].filename;
            }
            if(req.files['sveslike']){
                let sl =[];
                for(let x of req.files['sveslike']){
                    sl.push(x.filename);
                }
                objava.sveslike = sl;
            }
            

            objava.save().then(objava => {
                res.json('Izmena uspela');
            })
            .catch(err => {
                res.status(400).send(err);
            });
        }
    });
});

router.route('/galerija/obrisi/:id').get(provera, (req, res) => {
    Objava.findByIdAndRemove(req.params.id, (err, objava) => {
        if(err) res.json(err);
        else res.json('uspesno obrisana objava');
    });
});

router.route('/posaljiporuku').post(upload.none(),(req, res) => {
    if(!req.body) res.send("telo ---->" + req.body);
    else{
         let objava = new Objava({
             naziv: req.body.naziv,
             kategorija: "Poruka",
             opis: req.body.opis
         });
         objava.save()
             .then(objava => {
                 res.status(200).json({'poruka': 'Poruka uspesno poslata'});
             })
             .catch(err => {
                res.status(400).send('Dodavanje neuspelo');
        });
    }

});

router.route('/signup').post((req, res) => {
    User.find({korisnickoime: req.body.korisnickoime})
        .then(user => {
            if(user.length >= 1) return res.status(409).json({
                message: "korisnicko ime vec postoji"
            });
            else{
                bc.hash(req.body.sifra, 10, (err, hash) => {
                    if(err){
                        console.log(err);
                        res.send(err);
                    }
                    else {
                         const korisnik = new User({
                             _id: new mongoose.Types.ObjectId(),
                             korisnickoime: req.body.korisnickoime,
                             sifra: hash
                         });
                         korisnik.save()
                            .then((r)=>{
                                 res.status(200).json("Napravljen profil");
                             })
                            .catch((err)=>{
                                 res.send(err);
                             });
                    }
                });
                
            }
        })
        .catch(err => {
            res.send(err);
        });
    
});

router.route('/login').post((req, res) => {
    User.findOne({korisnickoime: req.body.korisnickoime})
        .exec()
        .then(kor => {
            if(!kor) return res.send("korisnik ne postoji");
            else{
                bc.compare(req.body.sifra, kor.sifra, (err, result) => {
                    if(err) return res.send("Greska");
                    else{
                        if(result){
                            const token = jwt.sign({
                                korisnickoime: kor.korisnickoime,
                                userId: kor._id,
                            },key_jwt , {
                                expiresIn: "900s",
                            });
                            return res.status(200).json({
                                t: token,
                                i: kor.korisnickoime
                            });

                        } else{
                            return res.send("Pogresna sifra")
                        }
                    }
                });
            }
        })
        .catch((err)=>{
            res.send(err);
        });
});



router.route('/korisnici').get( (req, res) => {
    User.find((err, korisnici) => {
        if(err) res.send(err);
        else {
            res.send(korisnici);
        }
    });
});

