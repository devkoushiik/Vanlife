let obj = {
  name: "max",
  age: 29,
  greet: function () {
    console.log("Hello there!");
  },
};
let { name, greet } = obj;
greet();

// remember one thing when you are desesturing an object you can't skip any property
