const express = require('express');
const router = express.Router();
const PeopleFinder = require('../../module/database')

router.get('/add', (req, res) => {
    res.status(200).render('../public/article/add.ejs')
})

// router.get('/find', (req, res) => {
// res.status(200).render('../public/article/find.ejs')
// })

router.get('/update/:id', async(req, res) => {

    const person = await PeopleFinder.findById(req.params.id);
    res.status(200).render('../public/article/update.ejs', {person : person})
})

router.get('/search', async(req, res) => {
    const person = await PeopleFinder.find({"name" : req.body.name});
    const con = JSON.stringify(person)
    console.log(req.body.name)
    res.status(200).json(person)
})

router.put('/:id', async(req, res) => {

    req.person = await PeopleFinder.findById(req.params.id)
    let person = req.person
        person.name = req.body.name
        person.dateOfBirth = req.body.dateOfBirth
        person.address = req.body.address

    try{
        person = await person.save()
        res.redirect('/')
    }
    catch(e){
        res.end(e)
    }
})

router.delete('/delete/:id', async(req, res) => {
    await PeopleFinder.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

router.post('/add_data', (req, res) => {
    console.log(req.body.name)
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