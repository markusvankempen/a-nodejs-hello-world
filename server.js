
//  OpenShift sample Node application
var express = require('express'),
    app     = express()
  console.log('node.js mvk20190906')
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
    res.status(200).send('Hello! '+Date.now());

});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});


app.listen(port, ip);
  console.log("starting...")
  console.log(new Date() + 'Server running on http://%s:%s v1', ip, port);

module.exports = app ;
