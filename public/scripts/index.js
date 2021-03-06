//script/index.js

var headers = '' + 
'<html>' +
	'<head>' +
		'<meta charset="utf-8">' +
		'<meta name="viewport" content="width=device-width, initial-scale=1">' +
		'<link rel="stylesheet" href="frontend/bootstrap-3.3.6-dist/css/bootstrap.css">' +
		'<link rel="stylesheet" href="stylesheet/main.css" type="text/css">' +
		'<link rel="icon" href="logo.jpg" />' +
		'<title>NAVIN COC</title>' +
		'<script src="frontend/jQuery.js"></script>' +
		'<script src="https://fb.me/react-0.14.3.js"></script>' +
		'<script src="https://fb.me/react-dom-0.14.3.js"></script>' +
		'<script src="frontend/bootstrap-3.3.6-dist/js/bootstrap.js"></script>' +
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.js"></script>' +
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.js"></script>' +
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>' +
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>' +
		'<script src="scripts/logIn.js"></script>' +
		'<script type="text/babel" src="scripts/navcoc.js"></script>' +
		'<script type="text/babel" src="scripts/test.js"></script>' +
		'<script type="text/babel" src="scripts/table.js"></script>' +
	'</head>' +
	'<body>';
	
var login = '' +
	'<div id="login" class="maxWidth">' +
		'<div class="small-3"></div>' +
		'<div class="large-2">' +
			'<input type="email" placeholder="Email" />' +
		'</div>' +
		'<div class="small-1"></div>' +
		'<div class="large-2">' +
			'<input type="password" placeholder="Password" />' +
		'</div>' +
		'<div class="small-1"></div>' +
		'<div class="small-4">' +
			'<a href="" onclick="logInConfirm();">logIn</a>' +
		'</div>' +
	'</div>';

var index = '' +
	'<div id="page">' +
		'<a href="" onclick="logIn();">logIn</a>' +
		'<div id="a" class="tColorBlack mLeft25p width75p"></div>' +
		'<div id="sometable" class="col-md-offset-4 col-md-8"></div>' +
		'<div id="b"></div>' +
		'<a href="" onclick="logInConfirm();">close</a>' +
	'</div>';

var footer = '' +
		'<div class="height25 bottom0 pFixed bColorYellow tColorBlack tAlignCenter maxWidth">Black & Yellow Inc.</div>' +
	'</body></html>';

module.exports = {
  index : function(req, res) {
    res.send(headers+index+footer);
  },
  login : function(req, res) {
    res.send(headers+login+footer);
  }
};
