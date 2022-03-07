function sendRequest(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function () {
    success(JSON.parse(this.response));
  };
  xhr.onerror = function () {
    error(xhr.statusText);
  };
}

sendRequest(
  "https://restcountries.com/v2/all",
  function (result) {
    let code = result[104].currencies[0].code;
    console.log(code);
  },
  function (err) {
    console.log(err);
  }
);
