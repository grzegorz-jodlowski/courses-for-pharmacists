const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');


const coursesRoutes = require('./routes/courses.routes');
const ordersRoutes = require('./routes/orders.routes');
const newsletterRoutes = require('./routes/newsletter.routes');
// const authRoutes = require('./routes/auth.routes');

const app = express();

// configure passport provider options
passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL,
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());

// serialize user when saving to session
passport.serializeUser((user, serialize) => {
  serialize(null, user);
});

// deserialize user when reading from session
passport.deserializeUser((obj, deserialize) => {
  deserialize(null, obj);
});

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', coursesRoutes);
app.use('/api', ordersRoutes);
app.use('/api', newsletterRoutes);
// app.use('/api', authRoutes);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    res.redirect('/user/logged');
  }
);

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
mongoose.connect('mongodb://localhost:27017/onlinePharmacy', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(`mongodb+srv://gjodlowski:${process.env.onlinePharmacy}@cluster0-rm7fq.gcp.mongodb.net/onlinePharmacy?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
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
