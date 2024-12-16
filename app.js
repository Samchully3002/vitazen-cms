const express = require('express');
const path = require('path');
const app = express();
const authRoute = require('./routes/authRoute.js');
const dashboardRoute = require('./routes/dashboardRoute.js');
const productRoute = require('./routes/productRoute.js');
const vsightRoute = require('./routes/vsightRoute.js');

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

// Set base URL globally



// Start the server
const PORT = process.env.PORT || 5000;

app.locals.baseUrl = `http://localhost:${PORT}`; // Your base URL here

app.listen(PORT, () => console.log(`Frontend running at http://localhost:${PORT}`));
