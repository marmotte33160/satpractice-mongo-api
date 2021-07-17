const mongoose = require('mongoose')

const CountryShema = mongoose.Schema({
    name: String,
    Capital: String,
    population: String,
    language: String,
    volcanos: Boolean
    

})

module.exports = mongoose.model('Country', CountryShema)