// The first i is using pre-increment operator hence i starts at 0 and displays 1 during the first loop. Continue testing the conditions and displaying the associated keywords.
for (let i = 0; i < 100; )
  document.getElementById("fb").innerHTML +=
    ++i % 15 === 0
      ? "<div>FizzBuzz</div>"
      : i % 3 === 0
      ? "<div>Fizz</div>"
      : i % 5 === 0
      ? "<div>Buzz</div>"
      : "<div>" + i + "</div>";
