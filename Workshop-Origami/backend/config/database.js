const mongoose = require('mongoose');
const config = require('./config');
const dbURL = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbAddress}/${config.dbName}?retryWrites=true&w=majority`;

module.exports = () => {
    return mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
};