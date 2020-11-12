
exports.up = function(knex) {
  return knex.schema.createTable("cars", function(cars) {
      cars.increments();

      cars.string("VIN", 17).notNullable().unique();
      cars.string('Make').notNullable();
      cars.string('Model').notNullable();
      cars.integer('Mileage').notNullable();
      cars.enum('TitleStatus', ['clean', 'salvage', 'junk', 'bonded', 'reconstructed', 'affidavit', 'rebuilt', 'parts only', 'lienholder', 'export', 'import']).nullable();
      cars.enum('Transmission', ['Manuel', 'Automatic']).nullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
