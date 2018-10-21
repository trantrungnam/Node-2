var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var adminRouter = require('./routes/admins');
// var bodyParser = require('body-parser')
var categoryRouter = require('./routes/categories')
var productRouter = require('./routes/products')
var customerRouter = require('./routes/customers')
var orderRouter = require('./routes/orders')
var orderItem = require('./routes/orderItems')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})
app.use('/admin', adminRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/customers', customerRouter);
app.use('/ordesr', orderRouter);
app.use('/orderItem', orderItem)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req
        .app
        .get('env') === 'development'
            ? err
            : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
