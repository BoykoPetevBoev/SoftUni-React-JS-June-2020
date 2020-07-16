const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 4000,
        dbUser: 'user',
        dbPassword: 123,
        dbName: 'Origami', 
        dbAddress: 'softuni-dx3ut.mongodb.net',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];