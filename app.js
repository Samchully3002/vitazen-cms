const express = require('express');
const path = require('path');
const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use('/public', express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('contents/dashboard');
});

app.get('/dashboard', (req, res) => {
  res.render('contents/dashboard');
});

app.get('/products/product-list', (req, res) => {
  res.render('contents/dashboard');
});

app.get('/products/product-discount', (req, res) => {
  res.render('contents/dashboard');
});

app.get('/promotions/hero-slider', (req, res) => {
  res.render('contents/dashboard');
});

app.get('/promotions/banner-promo', (req, res) => {
  res.render('contents/dashboard');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
