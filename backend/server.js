const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
require('dotenv').config();

const coursesRoutes = require('./routes/courses.routes');
const ordersRoutes = require('./routes/orders.routes');
const newsletterRoutes = require('./routes/newsletter.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

/* API ENDPOINTS */
app.use('/api', coursesRoutes);
app.use('/api', ordersRoutes);
app.use('/api', newsletterRoutes);
app.use('/api', usersRoutes);


/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect((process.env.NODE_ENV === 'production') ? `mongodb+srv://${process.env.dbName}:${process.env.onlinePharmacy}@cluster0-rm7fq.gcp.mongodb.net/onlinePharmacy?retryWrites=true&w=majority` : 'mongodb://localhost:27017/onlinePharmacy', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
