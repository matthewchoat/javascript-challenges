var readlineSync = require('readline-sync');
var input = readlineSync.question("How many digits would you like to see?: ");

for (var iteration = 1; iteration <= Number(input); iteration++) {
  if (iteration % 3 === 0 && iteration % 5 === 0 ) {
    console.log("FooBar");
  }
  else if (iteration % 3 === 0) {
    console.log("Foo");
  }
  else if (iteration % 5 === 0) {
    console.log("Bar");
  }
  else {
    console.log(iteration);
  }
}