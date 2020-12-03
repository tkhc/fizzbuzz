/* Using for loop and if else
var container = document.querySelector('.js');
for (var i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      container.innerHTML += "<div>FizzBuzz</div>";
    } else if (i % 3 === 0) {
      container.innerHTML += "<div>Fizz</div>";
    } else if (i % 5 === 0) {
      container.innerHTML += "<div>Buzz</div>";
    } else {
      container.innerHTML += "<div>" + i + "</div>";
    }
}
*/
//Using ternary operator instead
var container = document.querySelector(".js");
for (let i = 0; i < 100;)
  container.innerHTML += (++i%15===0) ? "<div>FizzBuzz</div>" : (i%3===0) ? "<div>Fizz</div>" : (i%5===0) ? "<div>Buzz</div>" : "<div>" + i + "</div>";
