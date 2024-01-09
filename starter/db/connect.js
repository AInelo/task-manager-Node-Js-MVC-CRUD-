const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://lionel:1234@atlascluster.n0cgkrm.mongodb.net/?retryWrites=true&w=majority';

const connectDB = (url) => {
return mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    tls: true
})
}


module.exports = connectDB