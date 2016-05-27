var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Busboy = require('busboy');
var router = require('./router');
var colors = require('colors');
var fs = require('fs');
var bodyParser = require('body-parser');
var inspect = require('util').inspect;
var imagePath = '',
    blogName = '',
    textArea = '';

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

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

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

app.get('/admin/createBlog', function(req, res) {
  res.render('blog.ejs', {imagePath: imagePath, blogName: blogName, textArea: textArea});
});

app.post('/admin/editBlog', function(req, res) {
  
});

app.get('/admin/getBlog', function(req, res) {
});

app.post('/admin/imageUpload', function(req, res) {
  //console.log(req.body);
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      file.pipe(fs.createWriteStream('public/images/1'+filename));
      imagePath = '/images/1'+filename;
    });
  busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
    //console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    if ('blogName' == fieldname) {
      blogName = val;
    }
    if ('textArea' == fieldname) {
      textArea = val;
    }
  });
  busboy.on('finish', function() {
    //console.log('Done parsing form!', imagePath);
    res.redirect('/admin/createBlog');
    //res.render('blog.ejs', {imagePath: imagePath, blogName: blogName, textArea: textArea});
  });
   return req.pipe(busboy);
//  res.send(req.body);
});

app.post('/admin/template', function(req, res) {
  console.log(req.body);
  res.status(200).send(req.body);
});

app.get('/admin/temp.ejs', function (req, res) {
  //console.log(req.route.stack);
  res.render('temp.ejs', {data : req.body});
});

app.listen(4000);

