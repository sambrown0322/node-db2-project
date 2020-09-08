exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Cars").insert([
        {
          VIN: 10983830,
          Make: "Subaru",
          Model: "Impreza",
          Mileage: 130000,
          Transmission: "Automatic",
          Title: "Clean",
        },
        {
          VIN: 94928374,
          Make: "Subaru",
          Model: "Crosstrek",
          Mileage: 200000,
          Transmission: "Automatic",
          Title: "Clean",
        },
        {
          VIN: 647239482,
          Make: "Subaru",
          Model: "Legacy",
          Mileage: 100000,
          Transmission: "Automatic",
          Title: "Clean",
        },
      ]);
    });
};
