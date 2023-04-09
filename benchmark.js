// const Benchmark = require("benchmark");

// var suite = new Benchmark.Suite();

// // add tests
// suite
//   .add("limit", function () {
//     limit("Mango", 3);
//   }
//   .add("length", function () {
//     length("Mango");
//   }
//   .add("subString", function () {
//     subString("Mango");
//   }
//   .add("toArray", function () {
//     toArray("Mango");
//   }
//   // add listeners
//   .on("cycle", function (event) {
//     console.log(String(event.target));
//   })
//   .on("complete", function () {
//     console.log("Fastest is " + this.filter("fastest").map("name"));
//   }
//   // run async
//   .run({ async: true });
