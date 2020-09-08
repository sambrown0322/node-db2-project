exports.up = function (knex) {
  return knex.schema.createTable("Cars", (tbl) => {
    tbl.increments("id");

    tbl.string("VIN").unique().notNullable().index();
    tbl.string("Make").notNullable().index();
    tbl.string("Model").notNullable().index();
    tbl.integer("Mileage").notNullable();
    tbl.string("Transmission").index();
    tbl.string("Title").index();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Cars");
};
