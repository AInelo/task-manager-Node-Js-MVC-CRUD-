const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://lionel:1234@atlascluster.n0cgkrm.mongodb.net/?retryWrites=true&w=majority';


mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(()=> console
    .log('CONNECTED TO THE DB...'))
    .catch((err)=>console.log(err))