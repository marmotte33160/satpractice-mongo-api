const Country = require('../models/contriesModel')

exports.createCountry = (req, res) => {
    new Country(req.body)
    .save()
    .then(() => res.status(200).send('Created country'))
    .catch(err => console.error('Could not create country', err))

}
exports.updateCountry = (req, res) => {
 Country
 .findOneAndUpdate({name: req.params.name}, {$set: req.body})
 .then(()  => res.status(200).send('Country updated'))
 .catch(err => console.log('could not update country', err))

}
exports.deleteCountry = (req, res) => {
 Country
 .findOneAndDelete({name: req.params.name},)
 .then(()  => res.status(200).send('Delete Country'))
 .catch(err => console.log(err))
}

exports.getOneCountry = (req, res) => {
    Country
    .findOne({Capital: req.params.capital})
    .then(country => res.send(country))
    .catch(err => console.log('could not get one country',err))
}