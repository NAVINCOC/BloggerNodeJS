var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var router = require('./router');
var colors = require('colors');
 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

var app = express();

console.log('server listening at 127.0.0.1 over port 4000'.info);
app.use(cookieParser());
app.use(session({
  secret: 'meru_where_life_meets_its_purpose',//imp to incrypt session over broser to stop unknown user access
 // duration: 30 * 60 * 1000,// session expire after 30min used for money tranfer
 // activeDuration: 5 * 60 * 1000,// minimum time for which user had to be over web-site before log-out. user can log-out after 5min
  resave: true,
  saveUninitialized: true
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//router(app);

/*app.get('/*', function(req, res, next) {
  if (!req.session.user) {
    res.redirect('/login');
  }
});
*/
app.get('/login', function (req, res) {
  req.session.user = {
    user: 'a',
    pass: 'asd'
  };
  console.log(req.headers['user-agent'].bgWhite.debug);
  res.render('index');
});

app.post('/data', function (req, res) {
  console.log('req session ==== ',req.body);
  res.send('yes');
});

app.get('/data', function (req, res) {
  var data = [
  {
    "body-parser": "~1.0.0",
    "connect-redis": "*",
    "cookie-parser": "~1.0.1",
    "debug": "~0.7.4",
    "errorhandler": "^1.1.1",
    "express": "~4.2.0",
    "express-session": "*",
    "jade": "~1.3.0",
    "lodash": "~2.4.1",
    "morgan": "~1.0.0",
    "multer": "^0.1.0",
    "request": "2.33.0",
    "static-favicon": "~1.0.0",
    "validator": "1.1.0",
    "market-oauth": "git+ssh://git@paytm.unfuddle.com:paytm/market-oauth.git",
    "market-acl": "git+ssh://git@paytm.unfuddle.com:paytm/market-acl.git#qasim",
    "salesforce-config":"git+ssh://git@paytm.unfuddle.com:paytm/salesforce-config.git",
    "merchant-external-config": "git+ssh://git@paytm.unfuddle.com:paytm/merchant-external-config.git",
    "ptmproc": "git+ssh://git@paytm.unfuddle.com:paytm/proc.git",
    "minifyjs": "git+ssh://git@paytm.unfuddle.com:paytm/minifyjs.git",
    "jsforce": "1.3.1",
    "csv" : "0.3.7",
    "ya-csv": "0.9.4",
    "nodemailer": "1.0.4",
    "nodemailer-smtp-pool": "0.1.7"
  },
  {
    "body-parser": "~1.0.0",
    "connect-redis": "*",
    "cookie-parser": "~1.0.1",
    "debug": "~0.7.4",
    "errorhandler": "^1.1.1",
    "express": "~4.2.0",
    "express-session": "*",
    "jade": "~1.3.0",
    "lodash": "~2.4.1",
    "morgan": "~1.0.0",
    "multer": "^0.1.0",
    "request": "2.33.0",
    "static-favicon": "~1.0.0",
    "validator": "1.1.0",
    "market-oauth": "git+ssh://git@paytm.unfuddle.com:paytm/market-oauth.git",
    "market-acl": "git+ssh://git@paytm.unfuddle.com:paytm/market-acl.git#qasim",
    "salesforce-config":"git+ssh://git@paytm.unfuddle.com:paytm/salesforce-config.git",
    "merchant-external-config": "git+ssh://git@paytm.unfuddle.com:paytm/merchant-external-config.git",
    "ptmproc": "git+ssh://git@paytm.unfuddle.com:paytm/proc.git",
    "minifyjs": "git+ssh://git@paytm.unfuddle.com:paytm/minifyjs.git",
    "jsforce": "1.3.1",
    "csv" : "0.3.7",
    "ya-csv": "0.9.4",
    "nodemailer": "1.0.4",
    "nodemailer-smtp-pool": "0.1.7"
  },
  { 
    "body-parser": "~1.0.0",
    "connect-redis": "*",
    "cookie-parser": "~1.0.1",
    "debug": "~0.7.4",
    "errorhandler": "^1.1.1",
    "express": "~4.2.0",
    "express-session": "*",
    "jade": "~1.3.0",
    "lodash": "~2.4.1",
    "morgan": "~1.0.0",
    "multer": "^0.1.0",
    "request": "2.33.0",
    "static-favicon": "~1.0.0",
    "validator": "1.1.0",
    "market-oauth": "git+ssh://git@paytm.unfuddle.com:paytm/market-oauth.git",
    "market-acl": "git+ssh://git@paytm.unfuddle.com:paytm/market-acl.git#qasim",
    "salesforce-config":"git+ssh://git@paytm.unfuddle.com:paytm/salesforce-config.git",
    "merchant-external-config": "git+ssh://git@paytm.unfuddle.com:paytm/merchant-external-config.git",
    "ptmproc": "git+ssh://git@paytm.unfuddle.com:paytm/proc.git",
    "minifyjs": "git+ssh://git@paytm.unfuddle.com:paytm/minifyjs.git",
    "jsforce": "1.3.1",
    "csv" : "0.3.7",
    "ya-csv": "0.9.4",
    "nodemailer": "1.0.4",
    "nodemailer-smtp-pool": "0.1.7"
  },
  {  
    "body-parser": "~1.0.0",
    "connect-redis": "*",
    "cookie-parser": "~1.0.1",
    "debug": "~0.7.4",
    "errorhandler": "^1.1.1",
    "express": "~4.2.0",
    "express-session": "*",
    "jade": "~1.3.0",
    "lodash": "~2.4.1",
    "morgan": "~1.0.0",
    "multer": "^0.1.0",
    "request": "2.33.0",
    "static-favicon": "~1.0.0",
    "validator": "1.1.0",
    "market-oauth": "git+ssh://git@paytm.unfuddle.com:paytm/market-oauth.git",
    "market-acl": "git+ssh://git@paytm.unfuddle.com:paytm/market-acl.git#qasim",
    "salesforce-config":"git+ssh://git@paytm.unfuddle.com:paytm/salesforce-config.git",
    "merchant-external-config": "git+ssh://git@paytm.unfuddle.com:paytm/merchant-external-config.git",
    "ptmproc": "git+ssh://git@paytm.unfuddle.com:paytm/proc.git",
    "minifyjs": "git+ssh://git@paytm.unfuddle.com:paytm/minifyjs.git",
    "jsforce": "1.3.1",
    "csv" : "0.3.7",
    "ya-csv": "0.9.4",
    "nodemailer": "1.0.4",
    "nodemailer-smtp-pool": "0.1.7"
  },
  {
    "body-parser": "~1.0.0",
    "connect-redis": "*",
    "cookie-parser": "~1.0.1",
    "debug": "~0.7.4",
    "errorhandler": "^1.1.1",
    "express": "~4.2.0",
    "express-session": "*",
    "jade": "~1.3.0",
    "lodash": "~2.4.1",
    "morgan": "~1.0.0",
    "multer": "^0.1.0",
    "request": "2.33.0",
    "static-favicon": "~1.0.0",
    "validator": "1.1.0",
    "market-oauth": "git+ssh://git@paytm.unfuddle.com:paytm/market-oauth.git",
    "market-acl": "git+ssh://git@paytm.unfuddle.com:paytm/market-acl.git#qasim",
    "salesforce-config":"git+ssh://git@paytm.unfuddle.com:paytm/salesforce-config.git",
    "merchant-external-config": "git+ssh://git@paytm.unfuddle.com:paytm/merchant-external-config.git",
    "ptmproc": "git+ssh://git@paytm.unfuddle.com:paytm/proc.git",
    "minifyjs": "git+ssh://git@paytm.unfuddle.com:paytm/minifyjs.git",
    "jsforce": "1.3.1",
    "csv" : "0.3.7",
    "ya-csv": "0.9.4",
    "nodemailer": "1.0.4",
    "nodemailer-smtp-pool": "0.1.7"
    }
  ];

  if (req.headers.key === 'absinth' && req.headers.access === 'onlycoc') {
    console.log(req.headers);
    res.status('200').send(data);
  } else res.status('401').send('unauthorised access');
});

app.listen(4000);
console.log(app);

