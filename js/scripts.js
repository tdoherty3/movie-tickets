//business logic

//var youth = { name: "Youth", price: 3.00 };
//var adult = { name: "Adult", price: 8.00 };
//var senior = { name: "Senior", price: 3.00 };
//var matinee = { name: "Matinee", price: 3.00 };

function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
 var price = 8;
 var newMovies = ["Black Panther", "Lady Bird", "Darkest Hour"];

 for (var i = 0; i , newMovies.length; i++) {
   if (this.movie === newMovies[i]) {
     price += 0;
   }
   if (this.age === Youth || this.age === Senior){
  price -= 5;
    }
  if (this.time === Matinee){
    price -= 5;
  }
   return price;
 };

$(document).ready(function() {
  var newTicket;
  $("form#movie-ticket").submit(function(event){
    event.prevent.default();
    //$("#price").empty();

    var movie = $("input:radio[name=movie]:checked").val();
      console.log(movie);
      var time = $("input:radio[name=time]:checked").val();
      console.log(time);
      var age = $("input:radio[name=age]:checked").val();
      console.log(age);

  $(".show-ticket").show();
  $("#nameOfMovie").text(" " + movie);
  $("#movieTime").text(" " + time);
  $("ticketPrice").text(" $" + price);
