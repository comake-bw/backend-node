// search db to see if zip code exists
// if yes, add location_id to user
const db = require('../../data/dbConfig');
// if no, add zipCode to locations table

module.exports = {
	findByZipCode(zipCode) {
		return db('locations').where({ zipCode }).first();
	},

	async add(zipCode) {
		return db('locations').insert({ zipCode });
	},
};
