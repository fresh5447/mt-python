const Promise         = require('bluebird');
  global.Promise      = Promise;

const  path           = require('path'),
  express             = require('express'),
  bodyParser          = require('body-parser'),
  app                 = express(),
  passport            = require('passport'),
  session             = require('express-session'),
  nodemailer          = require('nodemailer'),
  async               = require('async'),
  uriUtil             = require('mongodb-uri'),
  CourseRouter        = require('./routes/courses'),
  ModuleRouter        = require('./routes/modules'),
  CatRouter           = require('./routes/categories'),
  CheckpointsRouter   = require('./routes/checkpoints'),
  ResourcesRouter     = require('./routes/resources'),
  OrgsRouter          = require('./routes/orgs'),
  // errorHandler        = require('./errorHandler'),
  mongoose            =  Promise.promisifyAll(require('mongoose'));
  var  Raven               = require('raven');
  Raven.config(process.env.SENTRY_DSN).install();

  app.use(Raven.requestHandler());



 var options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/lms-v2";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

app.set('port', (process.env.PORT || 3001));



// Express only serves static assets in production
const isProd = process.env.NODE_ENV === 'production';
const clientPath = isProd ? 'client/build' : 'client/public';

if (isProd) {
  app.use(express.static(clientPath));
}



// app.use(errorHandler);

app.get('/', function mainHandler(req, res) {
    throw new Error('Broke!');
});



app.use(Raven.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + '\n');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
 secret: 'blahblahblah'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));

require('./config/passport')(passport);
require('./routes/user.js')(app, passport);


app.get('/home', function(req, res) {
  res.json({ message: "hi there!" })
})

app.use('/api/v2/courses', CourseRouter);
app.use('/api/v2/modules', ModuleRouter);
app.use('/api/v2/checkpoints', CheckpointsRouter);
app.use('/api/v2/categories', CatRouter);
app.use('/api/v2/resources', ResourcesRouter);
app.use('/api/v2/orgs', OrgsRouter);


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
