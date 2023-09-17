const mongoose = require('mongoose');

const dbConnect = function() {
    mongoose.connect('mongodb://127.0.0.1:27017/urlDb',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
        console.log('urlDb connection successful');
    }).catch((err) => {
        console.log('Error at urlDb Connection');
        console.error(err.message);
    });
}

module.exports = dbConnect;