const { isBoolean } = require("lodash");
const { ObjectID } = require("mongodb");

module.exports = function(app, passport, db) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    // don't need to touch this; works as is
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    // this section is the page after you log in. 
    app.get('/profile', isLoggedIn, function(req, res) {
        db.collection('messages').find().sort({currentDate: - 1}).toArray((err, result) => {
          if (err) return console.log(err)
          res.render('profile.ejs', {
            user : req.user,
            messages: result
          })
        })
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout(() => {
          console.log('User has logged out!')
        });
        res.redirect('/');
    });

// message board routes ===============================================================
    //THIS DISPLAYS ALL ENTRIES TO THE INTERFACE
    //note: in order for value to be printed on DOM, need to define obj key {publiser : req.body.publisher} etc
    app.post('/messages', (req, res) => {
      db.collection('messages').insertOne({name: req.body.name, book: req.body.book, city: req.body.city, publisher: req.body.publisher, year: req.body.year, description: '', currentDate: req.body.currentDate}, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/profile')
      })
    })
    //THIS IS SUPPOSED TO ADD A DESCRIPTION TO THE INTERFACE
    //PROBLEM: the description gets ad
    app.put('/messages/description', (req, res) => {
      console.log(`${req.body} This works!`)
      db.collection('messages')
      .findOneAndUpdate({_id: ObjectID(req.body.id)}, {
        $set: {
          description : req.body.updateDescription
        },
      }, 
      { returnOriginal: true}, 
      (err, result) => {
        if (err) return res.send(err)
        res.redirect('/profile')
      })
    })
    // DELETE BUTTON
    app.delete('/messages', (req, res) => {
      db.collection('messages').findOneAndDelete({name: req.body.name, book: req.body.book, year: req.body.year}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })
// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
