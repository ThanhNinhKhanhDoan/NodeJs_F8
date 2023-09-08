const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));


//handlebars
app.engine('handlebars', handlebars.engine({
    extname: '.handlebars' //đổi đuôi .handlebars thành hdbs
}));
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})