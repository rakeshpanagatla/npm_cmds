let name1 = { firstname: "rakesh", lastname: "panagatla" };

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

printFullName.call(name1, "hyderabad", "telangana");

let name2 = { firstname: "sumanohar", lastname: "panagatla" };

// call is used for Function borrowing

printFullName.call(name2, "hattiesburg", "Mississippi");
printFullName.apply(name2, ["Hyderabad", "Telangana"]);

// The only difference between call and apply is square brackets

let printMyName = printFullName.bind(name2, "hattiesburg", "Mississippi");
// bind function binds object with the function which can be invoked or used later unlike call function which gives the output directly
console.log(printMyName);
// Above statement prints a function. which is invoked in the below statement
printMyName();
