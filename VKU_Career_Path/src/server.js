const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/connectDB');
const port = process.env.PORT || 3000;
const host_name = process.env.HOST_NAME || 'localhost';
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const session = require('express-session');
app.use('/sweetalert2', express.static('node_modules/sweetalert2/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key', // Replace with a strong, unique secret
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
  }));
configViewEngine(app);
app.use('/', webRoute);
async function startServer() {
    try {
        await connectDB();
        console.log('Database connection established');
        app.listen(port, host_name, () => {
            console.log(`Example app listening on ${host_name}:${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}
startServer();