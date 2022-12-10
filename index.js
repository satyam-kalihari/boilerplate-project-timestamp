const express = require('express')
const articleRouter = require('./public/routes/route')
const cors = require('cors');
const mongoose = require('mongoose')


const app = express();

mongoose.connect('mongodb://0.0.0.0/people_finder');

app.use(express.urlencoded({extended : false}))
app.set('view engine', 'ejs')
app.use('/api', articleRouter)

app.get('/', (req, res) => {
  res.status(200).render(__dirname + '/public/index.ejs')
})

var listener = app.listen(process.env.PORT, function () {
  app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  })
});

