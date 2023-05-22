if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const post = require('./models/db');
const app = express();
const brcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const PORT = 3000;

let initPassport = require('./passport-config');
initPassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        author : post.author,
        heading: post.heading,
        postDate: post.postDate,
        readTime: post.readTime,
        name: req.user?.name
    });
})

app.get('/post', (req, res) => {
    res.render('post', {
        name: req.user?.name 
    });
})

app.get('/create-post', checkAuthenticated, (req, res) => {
    res.render('create-post');
})

app.get('/login', checkNotAuthenticated,(req, res) => {
    res.render('login');
})

app.post('/login', checkNotAuthenticated,passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated,(req, res) => {
    res.render('signup-v2');
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await brcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.redirect('/register');
    }
})

app.get('*', (req, res) => {
	res.render('404')
})

app.delete('/logout', (req, res) => {
    // console.log(req.logout);
    req.logout();
    res.redirect('/');
})

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect('/')
    }
    next();
}

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})

