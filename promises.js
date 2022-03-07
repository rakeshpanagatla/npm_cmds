p1 = new Promise(function (resolve, reject) {
  if (true) {
    setTimeout(() => {
      resolve("p1 is resolved");
    }, 5000);
  } else {
    setTimeout(() => {
      reject("p1 is rejected");
    });
  }
});

p2 = new Promise(function (resolve, reject) {
  if (true) {
    setTimeout(() => {
      resolve("p2 is resolved");
    }, 5000);
  } else {
    setTimeout(() => {
      reject("p2 is rejected");
    });
  }
});

p3 = new Promise(function (resolve, reject) {
  if (true) {
    setTimeout(() => {
      resolve("p3 is resolved");
    }, 5000);
  } else {
    setTimeout(() => {
      reject("p3 is rejected");
    });
  }
});

Promise.all([p1, p2, p3]).then(function (data) {
  console.log(data);
});

Promise.all([p1, p2, p3]).catch(function (error) {
  console.log(error);
});

// CHAINING OF THEN AND USE OF RETURN AND THROW
var a = 5;
p = new Promise(function (resolve, reject) {
  a = a + 3;
  if (a >= 5) {
    resolve(a);
  } else {
    reject("p is rejected");
  }
});

p.then(function (data) {
  console.log(data);
  return data + 2;
})
  .then(function (data1) {
    console.log(data1);
    return data1 + 3;
    // if (data1 == 10) {
    //   throw "the value is 10";
    //   console.log(data1);
    // } else {
    //   return data1 + 3;
    // }
  })
  .then(function (data2) {
    console.log(data2);
  })
  .catch(function (error) {
    console.log(error);
  });
