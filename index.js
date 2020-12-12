function makeAdjectifier(adjective) {
  return function (string) {
    return adjective + " " + string;
  };
}

var coolifier = makeAdjectifier("cool");
console.log(coolifier("conference"));