const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;

// Set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set Handlebar routes
app.get('/', function(req, res) {
  res.render('home', {
    
  });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()  => console.log('Server listening on port ' + PORT));
