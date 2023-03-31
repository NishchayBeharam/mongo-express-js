const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())

try {
    mongoose.connect("mongodb://localhost:27017/test?authSource=yourDB&w=1",{
        auth:  {
            username: 'nishchay',
            password: 'moWnor-6goqcy-gicren-kaxcef-gusQo6-jajroc'
        },
        authSource:"admin"
    }).then(()=>{
        console.log('Connected');
    })
} catch (error) {
    console.log(error);
}

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));