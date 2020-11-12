
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'VIN21830912375678', Make: 'Ford', Model: 'Fusion', Mileage: 5346984, TitleStatus: 'clean', Transmission: 'Automatic'},
        {id: 2,  VIN: 'VIN87642457678094', Make: 'Honda', Model: 'Tundra', Mileage: 534634, TitleStatus: 'salvage', Transmission: 'Automatic'},
      ]);
    });
};
