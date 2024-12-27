const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/authRoute.js');
const dashboardRoute = require('./routes/dashboardRoute.js');
const productRoute = require('./routes/productRoute.js');
const vsightRoute = require('./routes/vsightRoute.js');
const promoRoute = require('./routes/promotionRoute.js');
const contactRoute = require('./routes/contactusRoute.js');
const adminRoute = require('./routes/adminRoute.js');

const app = express();

// Use cookie-parser
app.use(cookieParser());

// Other middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use('/public', express.static('public'));

// Serve Routes
app.use('/', authRoute);
app.use('/', dashboardRoute);
app.use('/', productRoute);
app.use('/', vsightRoute);
app.use('/', promoRoute);
app.use('/', contactRoute);
app.use('/', adminRoute);

// Catch-all middleware for undefined routes
app.use((req, res) => {
    res.status(404).render('contents/error-404'); // Render a custom 404 page
});
  


// Start the server
const PORT = process.env.PORT || 5000;

app.locals.baseUrl = `http://localhost:${PORT}`; // Your base URL here

app.listen(PORT, () => {
    console.log(`Frontend running at http://localhost:${PORT}`);
});
