const express= require('express');
const app=express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 5001;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
// Static Files
app.use(express.static('public'));

// Templating engine

const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
 
const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));