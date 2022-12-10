const express = require('express');
const router = express.Router();
const PeopleFinder = require('../../module/database')

router.get('/add', (req, res) => {
    res.status(200).render('../public/article/add.ejs')
})

router.get('/find', (req, res) => {
res.status(200).render('../public/article/find.ejs')
})

router.get('/update', (req, res) => {
res.status(200).render('../public/article/update.ejs')
})

router.get('/delete', (req, res) => {
res.status(200).render('../public/article/delete.ejs')
})

router.post('/add_data', (req, res) => {
    console.log(req.name)
    req.person = new PeopleFinder()
    let person = req.person
        person.name = req.body.name
        person.dateOfBirth = req.body.dateOfBirth
        person.address = req.body.address

    try{
        person = person.save()
        res.redirect('/')
    }
    catch(e){
        res.end(e)
    }
})

module.exports = router