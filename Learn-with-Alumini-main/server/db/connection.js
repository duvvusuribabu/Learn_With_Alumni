const mongoose = require('mongoose');

const url = 'mongodb+srv://dharaneesh2003:dharaneesh@cluster0.kbtqpqy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))