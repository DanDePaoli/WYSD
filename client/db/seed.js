const db = require('./index.js');

var platform = ['Airbnb', 'Ebay', 'Masterclass'];

var customers = ['Dog Lovers', 'Witches', 'Anarchises', 'Harry Potter Nerds'];

// db.query(`insert into rentals (rental_name, rental_description, rating, guestMax, pricePerNight, discountPricePerNight, weeklyDiscount, cleaningFee, serviceFee, numOfReviews) values ("${randomRentalName}", "${randomDescription}", ${randomRating}, ${randomGuestMax}, ${randomPricePerNight}, ${randomDiscountedPricePerNight}, ${randomHasWeeklyDiscount}, ${randomCleaningFee}, ${randomServiceFee}, ${randomnumOfReviews})`, (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(null, results);
//   }
// })
// }


// var generateRentals = (num) => {
// for (var i=0; i < num; i++){
// generateRental();
// }
// }

// generateRentals(5);

