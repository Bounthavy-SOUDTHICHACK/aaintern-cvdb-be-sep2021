var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var adminRouter = require('./routes/admin');
var indexRouter = require('./routes/index');
var overall_dataRouter = require('./routes/overall_data');
var provinceRouter = require('./routes/province');
var province_dataRouter = require('./routes/province_data');
var hotlineRouter = require('./routes/hotline_number');
var vaccinedRouter = require('./routes/vaccined');
var covidRouter = require('./routes/covid_laos');
var vaccination_dose_statusRouter = require('./routes/vaccination_dose_status');
var laosgraphRouter = require('./routes/laos_cases_graph');
var vaccinationRouter = require('./routes/vaccination_graph');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/overall_data', overall_dataRouter);
app.use('/province', provinceRouter);
app.use('/province_data', province_dataRouter);
app.use('/hotline', hotlineRouter);
app.use('/vaccined', vaccinedRouter);
app.use('/covid', covidRouter);
app.use('/vaccination_status', vaccination_dose_statusRouter);
app.use('/laos_cases_graph', laosgraphRouter);
app.use('/vaccination_graph', vaccinationRouter);

module.exports = app;
