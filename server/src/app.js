const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const cardRouter = require('./routes/card.router');
const learnedRouter = require('./routes/learned.router');
const authRouter = require('./routes/auth.router');
const tokenRouter = require('./routes/token.router');
const themeRouter = require('./routes/theme.router');
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/themes', themeRouter);
app.use('/api/cards', cardRouter);
app.use('/api/learneds', learnedRouter);

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
