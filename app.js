var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var overall_dataRouter = require('./routes/overall_data');
var provinceRouter = require('./routes/province');
var province_dataRouter = require('./routes/province_data');
var vaccinated_todayRouter = require('./routes/vaccinated_today');
var total_vaccinationRouter = require('./routes/total_vaccination');
var total_vaccination_dose1Router = require('./routes/total_vaccination_dose1');
var total_vaccination_dose2Router = require('./routes/total_vaccination_dose2');
var total_caseRouter = require('./routes/total_case');
var active_caseRouter = require('./routes/active_case');
var recovered_caseRouter = require('./routes/recovered_case');
var deaths_caseRouter = require('./routes/deaths_case');
var covid_case_provinceRouter = require('./routes/covid_case_province');
var vaccine_provinceRouter = require('./routes/vaccine_province');
var case_chartsRouter = require('./routes/case_charts');
var vaccine_chartsRouter = require('./routes/vaccine_charts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));


//Index
app.use('/', indexRouter);

//Admin
app.use('/admin', adminRouter);

//Overall Data
app.use('/overall_data', overall_dataRouter);

//Province
app.use('/province', provinceRouter);

//Province Data
app.use('/province_data', province_dataRouter);

//Vaccinated Today
app.use('/vaccinated_today', vaccinated_todayRouter);

//Total Vaccination
app.use('/total_vaccination', total_vaccinationRouter);

//Total Vaccination Dose 1
app.use('/total_vaccination_dose1', total_vaccination_dose1Router);

//Total Vaccination Dose 2
app.use('/total_vaccination_dose2', total_vaccination_dose2Router);

//Total Case 
app.use('/total_case', total_caseRouter);

//Active Case 
app.use('/active_case', active_caseRouter);

//Recovered Case
app.use('/recovered_case', recovered_caseRouter);

//Death Case
app.use('/deaths_case', deaths_caseRouter);

//Vaccine Province
app.use('/vaccine_province', vaccine_provinceRouter);

//Covid Case Province
app.use('/covid_case_province', covid_case_provinceRouter);

//Case_charts
app.use('/case_charts', case_chartsRouter);

//Vaccine_charts
app.use('/vaccine_charts', vaccine_chartsRouter);


module.exports = app;
